import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit {
  cakesTable: any;
  accessoriesTable: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    let cakes = this.cartService.getAllCakesromLocalStorage();
    this.cakesTable = cakes.map((cake: any) => {
      cake.cakeTotalPrice = parseInt(cake.cakeOriginalPrice) * parseInt(cake.quantity);
      return cake;
    });
    this.getAccessoryEmitter(null);
  }
  getAccessoryEmitter(cake: any) {
    let accessories = this.cartService.getAccessoryromLocalStorage();
    this.accessoriesTable = accessories.map((accessory: any) => {
      accessory.totalPrice = parseInt(accessory.accessoryPrice) * parseInt(accessory.quantity);
      return accessory;
    });
    console.log('123')
  }
}
