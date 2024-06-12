import { Component, Inject, OnInit, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { FileUpload } from '../admin-home/admin-home.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { CakeService } from 'src/app/services/cake.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/services/toast.service';
import { TOAST_ERROR, TOAST_NOTI } from 'src/app/const';
import { finalize } from 'rxjs';
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-create-cake-form',
  templateUrl: './create-cake-form.component.html',
  styleUrls: ['./create-cake-form.component.scss']
})
export class CreateCakeFormComponent implements OnInit {
  cakeForm: any;
  selectedFiles!: FileList;
  currentFileUpload!: FileUpload;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  chipFormControl: any;
  cakeProfileImagePathValidators: any;
  isLoader = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(private toastService: ToastService,
    private dialogRef: MatDialogRef<CreateCakeFormComponent>,
    private fb: FormBuilder, private firebaseService: FirebaseService,
    private cakeService: CakeService,
    @Inject(MAT_DIALOG_DATA) public cakeSelected: any) { }

  ngOnInit(): void {
    if (this.cakeSelected && this.cakeSelected.cakeProfileImagePath) {
      this.cakeProfileImagePathValidators = [];
    } else {
      this.cakeProfileImagePathValidators = [Validators.required];
    }
    this.cakeForm = this.fb.group({
      cakeName: ['', Validators.required],
      cakeDesc: ['', Validators.required],
      cakeType: ['mousse', Validators.required],
      cakeOriginalPrice: ['', [Validators.required, this.priceValidator]],
      cakeSalePrice: ['', [this.priceValidator]],
      cakeProfileImagePath: ['', this.cakeProfileImagePathValidators],
      cakeSize: new FormControl(['16x8', '18x8'], [Validators.required])
    });

    if (this.cakeSelected) {
      this.cakeForm.patchValue({
        cakeName: this.cakeSelected.cakeName || '',
        cakeDesc: this.cakeSelected.cakeDesc || '',
        cakeType: this.cakeSelected.cakeType || 'mousse',
        cakeOriginalPrice: this.cakeSelected.cakeOriginalPrice || '',
        cakeSalePrice: this.cakeSelected.cakeSalePrice || '',
        cakeSize: this.cakeSelected.cakeSize || ['16x8', '18x8']
      });
    }
  }
  get cakeSize() {
    return this.cakeForm.get('cakeSize');
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.cakeSize.setValue([...this.cakeSize.value, value.trim()]);
      this.cakeSize.updateValueAndValidity();
    }
    if (input) {
      input.value = '';
    }
  }

  remove(cakeSize: any): void {
    const index = this.cakeSize.value.indexOf(cakeSize);

    if (index >= 0) {
      this.cakeSize.value.splice(index, 1);
      this.cakeSize.updateValueAndValidity();
    }
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    const file = this.selectedFiles.item(0) as File;
    let typeFile = this.firebaseService.getExtendsionFile(file.name).toLowerCase();

    if (typeFile != 'jpg' && typeFile != 'png' && typeFile != 'jpeg' && file.size > 2000000) {
      alert('File must be PNG or JPG/JPEG and less than 20mb');
      this.clearFileInput();
    }
  }

  clearFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Clear the file input
    }
  }
  priceValidator(control: FormControl): { [key: string]: any } | null {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null;
    }

    const valid = /^\d+$/.test(value);
    return valid ? null : { 'invalidPrice': true };
  }

  sizeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const validPattern = /^\d+x\d+$/; // Regular expression to match NumberxNumber pattern
      const isValid = validPattern.test(control.value);
      return isValid ? null : { 'invalidSize': true };
    };
  }

  async addCake(cakeForm: any) {
    this.isLoader = true;
    if (this.cakeSelected) {
      if (this.selectedFiles) {
        cakeForm.cakeProfileImagePath = await this.upload();
      } else {
        cakeForm.cakeProfileImagePath = this.cakeSelected.cakeProfileImagePath;
      }
      cakeForm.cakeID = this.cakeSelected.cakeID;
      this.cakeService.updateCake(cakeForm).subscribe(
        (response) => {
          this.isLoader = false;
          this.toastService.openSnackBar('Chỉnh sửa thành công', 'Đóng', 'end', 'top', TOAST_NOTI);
          this.dialogRef.close();
        },
        (err) => {
          this.isLoader = false;
          this.toastService.openSnackBar('Chỉnh sửa thất bại', 'Đóng', 'end', 'top', TOAST_ERROR);
        }
      );
    } else {
      cakeForm.cakeProfileImagePath = await this.upload();
      this.cakeService.addCake(cakeForm).subscribe(
        (response) => {
          this.isLoader = false;
          this.toastService.openSnackBar('Thêm bánh thành công', 'Đóng', 'end', 'top', TOAST_NOTI);
          this.dialogRef.close();
        },
        (err) => {
          this.isLoader = false;
          this.toastService.openSnackBar('Thêm bánh thất bại', 'Đóng', 'end', 'top', TOAST_ERROR);
        }
      );
    }

  }

  async upload(): Promise<string> {
    const file = this.selectedFiles.item(0) as File;
    this.currentFileUpload = new FileUpload(file);

    // Wait for the upload to complete
    await this.firebaseService.pushFileToStorage(this.currentFileUpload).toPromise();

    // Return the newFilePath after upload completion
    return new Promise<string>((resolve, reject) => {
      this.firebaseService.pushFileToStorage(this.currentFileUpload)
        .pipe(
          finalize(() => {
            resolve(this.firebaseService.newFilePath); // Resolve with newFilePath after upload completion
          })
        )
        .subscribe();
    });

  }
}
