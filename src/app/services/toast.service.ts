import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _snackBar: MatSnackBar) {
  }
  openSnackBar(message: string, action: string, horizontalPositionInput: MatSnackBarHorizontalPosition,
     verticalPosition: MatSnackBarVerticalPosition, classInput = 'noti-toast') {
    this._snackBar.open(message, action, {
      horizontalPosition: horizontalPositionInput,
      verticalPosition: verticalPosition,
      duration: 3000,
      panelClass: classInput
    });
  }
}
