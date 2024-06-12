import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TOAST_NOTI } from 'src/app/const';
import { CakeService } from 'src/app/services/cake.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cake-collection-item',
  templateUrl: './cake-collection-item.component.html',
  styleUrls: ['./cake-collection-item.component.scss']
})
export class CakeCollectionItemComponent implements OnInit {
  @Input() collectionName = 'Danh muc banh';
  @Input() cakeType = 'mousse';
  @Output() cakeNumberInCartEmitter = new EventEmitter<string>();
  customOptions: OwlOptions = {
    items: 4,
    dots: true,
    // nav:true,
    autoWidth: false,

  }

  cakeList: any;
  constructor(private router: Router, private cartService: CartService, private toastService: ToastService, private cakeService: CakeService) { }

  ngOnInit(): void {
    this.cakeService.getCakeByType(this.cakeType).subscribe((response) =>{
      this.cakeList = response
      console.log(this.cakeList)
    })
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
