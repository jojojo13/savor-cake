import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  addCakeToCart(cake: any) {
    let list = JSON.parse(localStorage.getItem('orderItems') || '[]');
    let existingCakeIndex = list.findIndex((item: any) => item.id === cake.id);

    if (existingCakeIndex !== -1) {
      list[existingCakeIndex].quantity += 1;
    } else {
      cake.quantity = 1;
      list.push(cake);
    }
    // Update the localStorage with the updated list
    localStorage.setItem('orderItems', JSON.stringify(list));
  }

  getAllCakesromLocalStorage() {
    const storedList = localStorage.getItem('orderItems');
    if (storedList) {
      return JSON.parse(storedList);
    } else {
      return [];
    }
  }
}
