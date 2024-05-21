import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FileUpload } from '../admin-home/admin-home.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-create-cake-form',
  templateUrl: './create-cake-form.component.html',
  styleUrls: ['./create-cake-form.component.scss']
})
export class CreateCakeFormComponent implements OnInit {
  cakeForm: any;
  selectedFiles!: FileList;
  currentFileUpload!: FileUpload;
  constructor(private fb: FormBuilder, private firebaseService: FirebaseService, private cakeService: CakeService) { }

  ngOnInit(): void {
    this.cakeForm = this.fb.group({
      cakeName: ['', Validators.required],
      cakeDesc: ['', Validators.required],
      cakeType: ['mousse', Validators.required],
      cakeOriginalPrice: ['', [Validators.required, this.priceValidator]],
      cakeSalePrice: ['', [Validators.required, this.priceValidator]],
      cakeProfileImagePath: ['', Validators.required]
    });
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.upload();
  }
  priceValidator(control: FormControl): { [key: string]: any } | null {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      // Ignore empty values
      return null;
    }
  
    const valid = /^\d+$/.test(value);
    return valid ? null : { 'invalidPrice': true };
  }
  addCake(cakeForm: any){
    cakeForm.cakeProfileImagePath = this.firebaseService.newFilePath;
    this.cakeService.addCake(cakeForm).subscribe((response) =>{
      console.log(response);
    })
  }
  upload(): void {
    const file = this.selectedFiles.item(0) as File;
    let typeFile = this.firebaseService.getExtendsionFile(file.name).toLowerCase();

    if ((typeFile=='jpg'||typeFile=='png'||typeFile=='jpeg') && file.size < 10000) {
      this.currentFileUpload = new FileUpload(file);
      this.firebaseService.pushFileToStorage(this.currentFileUpload).subscribe(
        (percentage: any) => {
   
        },
        (error: any) => {
          console.log(error)
        }
      );
    } else {
      alert('Must import png/jpg/jpeg and must be less than 10mb');
    
    }
  }
}
