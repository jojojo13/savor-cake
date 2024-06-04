import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { TOAST_ERROR, TOAST_NOTI } from 'src/app/const';
import { CakeService } from 'src/app/services/cake.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss'],
  providers: [DatePipe],
})
export class CartContainerComponent implements OnInit {
  cakesTable: any;
  accessoriesTable: any;
  totalBillQuantity: any;
  totalBillPrice: any;
  billingForm: any;
  selectedPayment = 'Bank';
  todayDate: Date = new Date();
  constructor(private cartService: CartService,
    private toastSerivce: ToastService,
    private fb: FormBuilder, private cakeService: CakeService,
    private datePipe: DatePipe) {

  }

  ngOnInit(): void {
    this.getAllCake();
    this.getAccessoryEmitter(null);
    this.billingReport();
    this.billingForm = this.fb.group({
      bookerName: ['', Validators.required],
      bookerPhone: ['', Validators.required],
      bookerEmail: [''],
      receiverPhone: ['', Validators.required],
      receiverName: ['', Validators.required],
      addressCity: ['', Validators.required],
      addressDistrict: ['', Validators.required],
      addressStreet: ['', Validators.required],
      invoice: [false, Validators.required],
      note: [''],
      receiveDate: ['', Validators.required],
      receiveTime: ['8h30-9h30', Validators.required]
    })
  }
  billingReport() {
    let cakesQuantity = this.cakesTable.reduce((accumulator: number, cake: any) => accumulator + cake.quantity, 0);
    let cakesTotalPrice = this.cakesTable.reduce((accumulator: number, cake: any) => accumulator + cake.cakeTotalPrice, 0);
    let accessoriesQuantity = this.accessoriesTable.reduce((accumulator: number, accessory: any) => accumulator + accessory.quantity, 0);
    let accessoriesTotalPrice = this.accessoriesTable.reduce((accumulator: number, accessory: any) => accumulator + accessory.totalPrice, 0);
    this.totalBillQuantity = cakesQuantity + accessoriesQuantity;
    this.totalBillPrice = cakesTotalPrice + accessoriesTotalPrice;
  }
  getAccessoryEmitter(cake: any) {
    let accessories = this.cartService.getAccessoryromLocalStorage();
    this.accessoriesTable = accessories.map((accessory: any) => {
      accessory.totalPrice = parseInt(accessory.accessoryPrice) * parseInt(accessory.quantity);
      return accessory;
    });
    this.billingReport();

  }
  getAllCake() {
    let cakes = this.cartService.getAllCakesromLocalStorage();
    this.cakesTable = cakes.map((cake: any) => {
      const price = cake.cakeSalePrice ? parseInt(cake.cakeSalePrice) : parseInt(cake.cakeOriginalPrice);
      cake.cakeTotalPrice = price * parseInt(cake.quantity);
      return cake;
    });

  }
  removeItem(item: any, type: string) {
    if (type == 'cake') {
      let itemList = this.cartService.getAllCakesromLocalStorage();
      let itemListFilter = itemList.filter((cake: any) => {
        return item.cakeID != cake.cakeID;
      })
      this.cartService.updateCakeInLocalStorage(itemListFilter);
      this.toastSerivce.openSnackBar('Xóa bánh khỏi giỏ hàng thành công', 'Đóng', 'end', 'top');
      this.getAllCake();
    } else {
      let itemList = this.cartService.getAccessoryromLocalStorage();
      let itemListFilter = itemList.filter((accessory: any) => {
        return item.accessoryID != accessory.accessoryID;
      })
      this.cartService.updateAccessoryInLocalStorage(itemListFilter);
      this.toastSerivce.openSnackBar('Xóa phụ kiện khỏi giỏ hàng thành công', 'Đóng', 'end', 'top');
      this.getAccessoryEmitter(null);
    }
    this.billingReport();
  }
  bookingNow() {
    let billingObject = this.billingForm.value;
    billingObject.paymentType = this.selectedPayment;
    billingObject.selectedCakes = this.cakesTable;
    billingObject.selectedAccessories = this.accessoriesTable;
    billingObject.totalAmount = this.totalBillQuantity;
    billingObject.totalPrice = this.totalBillPrice;
    billingObject.receiveDate = this.datePipe.transform(billingObject.receiveDate, 'dd/MM/yyyy')!;
    console.log(billingObject)
    this.cakeService.addBilling(billingObject).subscribe(response => {
      this.cartService.updateAccessoryInLocalStorage([]);
      this.cartService.updateCakeInLocalStorage([]);
      this.toastSerivce.openSnackBar('Đặt hàng thành công, hãy kiểm tra đơn hàng của bạn qua email', 'Đóng', 'end', 'top', TOAST_NOTI);
      this.getAllCake();
      this.getAccessoryEmitter(null);
      this.billingReport();
    }, err => {
      this.toastSerivce.openSnackBar('Xảy ra lỗi khi đặt hàng, hãy thử lại', 'Đóng', 'end', 'top', TOAST_ERROR);
    }
    )
  }
}
