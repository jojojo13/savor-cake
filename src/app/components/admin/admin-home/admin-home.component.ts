import { Component, OnInit } from '@angular/core';

import { CreateCakeFormComponent } from '../create-cake-form/create-cake-form.component';
import { MatDialog } from '@angular/material/dialog';
import { CakeService } from 'src/app/services/cake.service';
import { ToastService } from 'src/app/services/toast.service';


export class FileUpload {
  key: string | undefined;
  name = '';
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
  cakeList: any;
  cakeTypeSelected = 'mousse';

  constructor(public dialog: MatDialog, private cakeService: CakeService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.getCakesByType();
  }

  ngOnChanges(): void {
    this.getCakesByType();
  }

  getCakesByType(): void {
    this.cakeService.getCakeByType(this.cakeTypeSelected).subscribe(
      (response) => {
        this.cakeList = response;
        console.log(response)
      },
      (error) => {
        this.toastService.openSnackBar('Không thể tải danh sách bánh', 'cancel', 'end', 'top', 'error-toast');
      }
    );
  }

  openDialog(): void {
    //this.toastService.openSnackBar('Không thể tải danh sách bánh', 'cancel', 'end', 'top');
    this.dialog.open(CreateCakeFormComponent);
  }



}
