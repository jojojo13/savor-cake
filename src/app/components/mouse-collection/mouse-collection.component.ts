
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TOAST_NOTI } from 'src/app/const';
import { CakeService } from 'src/app/services/cake.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-mouse-collection',
  templateUrl: './mouse-collection.component.html',
  styleUrls: ['./mouse-collection.component.scss']
})
export class MouseCollectionComponent implements OnInit {
  @Output() cakeNumberInCartEmitter = new EventEmitter<string>();
  customOptions: OwlOptions = {
    items: 4,
    dots: true,
    // nav:true,
    autoWidth: false,
 
  }
  
  cakeList: any;
  constructor(private router: Router, private cartService: CartService, private toastService: ToastService, private cakeService: CakeService) {}

  ngOnInit() {
    this.cakeService.getAllCake().subscribe((res)=>{
      this.cakeList = res
    });
  }
  addToCart(cake: any) {
    this.cartService.addCakeToCart(cake);
    this.toastService.openSnackBar('Đã thêm bánh vào giỏ hàng', 'Đóng', 'end', 'top', TOAST_NOTI);
    this.cakeNumberInCartEmitter.emit(cake);
  }
  addToCart2(cake:any){
    this.cartService.addCakeToCart(cake);
    this.cakeNumberInCartEmitter.emit(cake);
    this.router.navigateByUrl("/cart")
  }

}
