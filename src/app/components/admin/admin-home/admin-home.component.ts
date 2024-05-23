import { Component, OnInit } from '@angular/core';

import { CreateCakeFormComponent } from '../create-cake-form/create-cake-form.component';
import { MatDialog } from '@angular/material/dialog';
import { CakeService } from 'src/app/services/cake.service';
import { ToastService } from 'src/app/services/toast.service';
import { TOAST_ERROR } from 'src/app/const';
import { tap } from 'rxjs';


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
  cakeDialog: any
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
      },
      (error) => {
        this.toastService.openSnackBar('Không thể tải danh sách bánh', 'Đóng', 'end', 'top', TOAST_ERROR);
      }
    );
  }

  openDialog(): void {
    let dialog = this.dialog.open(CreateCakeFormComponent, {
      height: '560px'
    });

    dialog.afterClosed().subscribe(result => {
      this.getCakesByType();
    });

  }

  updateCake(cake: any) {
    let dialog = this.dialog.open(CreateCakeFormComponent, {
      data: cake,
      height: '800px'
    });
    dialog.afterClosed().subscribe(result => {
      this.getCakesByType();
    });
  }

}
