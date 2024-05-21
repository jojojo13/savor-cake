import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cake-collection-item',
  templateUrl: './cake-collection-item.component.html',
  styleUrls: ['./cake-collection-item.component.scss']
})
export class CakeCollectionItemComponent implements OnInit {
  @Input() collectionName = 'Danh muc banh';
  customOptions: OwlOptions = {
    items: 4,
    dots: true,
    // nav:true,
    autoWidth: false,

  }

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
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart(cake: any) {
    this.cartService.addCakeToCart(cake);
  }

}
