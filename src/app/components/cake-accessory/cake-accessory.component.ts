import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TOAST_NOTI } from 'src/app/const';
import { CakeService } from 'src/app/services/cake.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cake-accessory',
  templateUrl: './cake-accessory.component.html',
  styleUrls: ['./cake-accessory.component.scss']
})
export class CakeAccessoryComponent implements OnInit {
  @Output() accessoryEmitter = new EventEmitter<string>();
  accessories:any
  customOptions: OwlOptions = {
    items: 4,
    dots: true,
    // nav:true,
    autoWidth: false,

  }

  constructor(private cakeService: CakeService, private cartService: CartService, private toastService:ToastService) { }

  ngOnInit(): void {
    this.cakeService.getAllAccessory().subscribe(response =>{
      this.accessories = response;
    })
  }
  addToCart(accessory: any) {
    this.cartService.addAccessoryToCart(accessory);
    this.toastService.openSnackBar('Đã thêm phụ kiện vào giỏ hàng', 'Đóng', 'end', 'top', TOAST_NOTI);
    this.accessoryEmitter.emit(accessory);
  }
}
