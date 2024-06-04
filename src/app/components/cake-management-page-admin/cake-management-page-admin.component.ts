import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CakeService } from 'src/app/services/cake.service';
import { ToastService } from 'src/app/services/toast.service';
import { TOAST_ERROR, TOAST_NOTI } from 'src/app/const';
import { tap } from 'rxjs';
import { CreateCakeFormComponent } from '../admin/create-cake-form/create-cake-form.component';
@Component({
  selector: 'app-cake-management-page-admin',
  templateUrl: './cake-management-page-admin.component.html',
  styleUrls: ['./cake-management-page-admin.component.scss']
})
export class CakeManagementPageAdminComponent implements OnInit {
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
  removeCake(event: Event, cake: any) {
    // Prevent event propagation
    event.stopPropagation();
    if(confirm("Bạn có muốn xóa: "+cake.cakeName)) {
      this.cakeService.deleteCake(cake.cakeID).subscribe(
        (response) => {

          this.toastService.openSnackBar('Xóa bánh thành công', 'Đóng', 'end', 'top', TOAST_NOTI);
          this.getCakesByType();
        },
        (error) => {
          this.getCakesByType();
          this.toastService.openSnackBar('Xóa bánh thành công', 'Đóng', 'end', 'top', TOAST_NOTI);
        }
      );
    }
}

}
