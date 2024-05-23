import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  quantity:any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCakeNumberInCart(null);
  }
  getCakeNumberInCart(cake:any){
    let cakesInCart = this.cartService.getAllCakesromLocalStorage();
    this.quantity = cakesInCart.reduce((accumulator:number, cake:any) => accumulator + cake.quantity, 0);

  }
}
