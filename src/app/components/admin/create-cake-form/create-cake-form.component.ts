import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { FileUpload } from '../admin-home/admin-home.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { CakeService } from 'src/app/services/cake.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/services/toast.service';
import { TOAST_ERROR, TOAST_NOTI } from 'src/app/const';
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
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(private toastService: ToastService,
     private dialogRef: MatDialogRef<CreateCakeFormComponent>, 
     private fb: FormBuilder, private firebaseService: FirebaseService, 
     private cakeService: CakeService) { }

  ngOnInit(): void {
    this.cakeForm = this.fb.group({
      cakeName: ['', Validators.required],
      cakeDesc: ['', Validators.required],
      cakeType: ['mousse', Validators.required],
      cakeOriginalPrice: ['', [Validators.required, this.priceValidator]],
      cakeSalePrice: ['', [this.priceValidator]],
      cakeProfileImagePath: ['', Validators.required],
      cakeSize: new FormControl(['16x8', '18x8'], [Validators.required])
    });
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
  addCake(cakeForm: any) {
    this.upload();
    cakeForm.cakeProfileImagePath = this.firebaseService.newFilePath;
    this.cakeService.addCake(cakeForm).subscribe((response) => {
      this.dialogRef.close();
      this.toastService.openSnackBar('Thêm bánh thành công', 'Đóng', 'end', 'top', TOAST_NOTI);
    }, (err) => {
      this.toastService.openSnackBar('Thêm bánh thất bại', 'Đóng', 'end', 'top', TOAST_ERROR);
    })
  }
  async upload() {
    const file = this.selectedFiles.item(0) as File;
    let typeFile = this.firebaseService.getExtendsionFile(file.name).toLowerCase();
    if ((typeFile == 'jpg' || typeFile == 'png' || typeFile == 'jpeg') && file.size < 2000000) {
      this.currentFileUpload = new FileUpload(file);
      await this.firebaseService.pushFileToStorage(this.currentFileUpload).toPromise();
    } else {
      alert('Must import png/jpg/jpeg and must be less than 20mb');

    }
  }
}
