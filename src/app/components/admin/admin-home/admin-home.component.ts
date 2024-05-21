import { Component, OnInit } from '@angular/core';

import { CreateCakeFormComponent } from '../create-cake-form/create-cake-form.component';
import { MatDialog } from '@angular/material/dialog';


export class FileUpload {
  key: string | undefined;
  name= '' ;
  url: string | undefined;
  file: File;
  constructor(file: File) {
    this.file = file;
  }
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})

export class AdminHomeComponent implements OnInit {
  cakeList: any[] = [
    {
      id: 1,
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake layered with velvety chocolate frosting.',
      url: '../../../assets/images/mousse-chanh-leo.png',
      originalPrice: '250,000 VNĐ',
      salePrice: '200,000 VNĐ',
      code: 'V1001'
    },
    {
      id: 42,
      name: 'Strawberry Shortcake',
      description: 'Light and airy vanilla sponge cake filled with fresh strawberries and whipped cream.',
      url: '../../../assets/images/mousse-chanh-leo.png',
      originalPrice: '280,000 VNĐ',
      salePrice: '220,000 VNĐ',
      code: 'V1002'
    },
    {
      id: 31,
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake layered with velvety chocolate frosting.',
      url: '.../../../assets/images/nhan_xoai_dua2.jpeg',
      originalPrice: '250,000 VNĐ',
      salePrice: '200,000 VNĐ',
      code: 'V1001'
    },
    {
      id: 21,
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake layered with velvety chocolate frosting.',
      url: '../../../assets/images/mousse-chanh-leo.png',
      originalPrice: '250,000 VNĐ',
      salePrice: '200,000 VNĐ',
      code: 'V1001'
    },
    {
      id: 1,
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake layered with velvety chocolate frosting.',
      url: '../../../assets/images/mousse-chanh-leo.png',
      originalPrice: '250,000 VNĐ',
      salePrice: '200,000 VNĐ',
      code: 'V1001'
    },
    {
      id: 1,
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake layered with velvety chocolate frosting.',
      url: '../../../assets/images/mousse-chanh-leo.png',
      originalPrice: '250,000 VNĐ',
      salePrice: '200,000 VNĐ',
      code: 'V1001'
    },
    {
      id: 1,
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake layered with velvety chocolate frosting.',
      url: '../../../assets/images/mousse-chanh-leo.png',
      originalPrice: '250,000 VNĐ',
      salePrice: '200,000 VNĐ',
      code: 'V1001'
    }
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateCakeFormComponent);
  }

  

}
