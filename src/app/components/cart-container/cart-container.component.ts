import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    let cakes = this.cartService.getAllCakesromLocalStorage();
    console.log(cakes)
  }

}
