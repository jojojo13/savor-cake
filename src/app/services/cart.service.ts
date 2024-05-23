import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  addCakeToCart(cake: any) {
    let list = JSON.parse(localStorage.getItem('orderItems') || '[]');
    let existingCakeIndex = list.findIndex((item: any) => item.cakeID === cake.cakeID);

    if (existingCakeIndex !== -1) {
      list[existingCakeIndex].quantity += 1;
    } else {
      cake.quantity = 1;
      list.push(cake);
    }
    // Update the localStorage with the updated list
    localStorage.setItem('orderItems', JSON.stringify(list));
  }
  
  addAccessoryToCart(accessory: any) {
    let list = JSON.parse(localStorage.getItem('orderItemAccessories') || '[]');
    let existingAccessoryIndex = list.findIndex((item: any) => item.accessoryID === accessory.accessoryID);

    if (existingAccessoryIndex !== -1) {
      list[existingAccessoryIndex].quantity += 1;
    } else {
      accessory.quantity = 1;
      list.push(accessory);
    }
    // Update the localStorage with the updated list
    localStorage.setItem('orderItemAccessories', JSON.stringify(list));
  }
  getAllCakesromLocalStorage() {
    const storedList = localStorage.getItem('orderItems');
    if (storedList) {
      return JSON.parse(storedList);
    } else {
      return [];
    }
  }
  getAccessoryromLocalStorage() {
    const storedList = localStorage.getItem('orderItemAccessories');
    if (storedList) {
      return JSON.parse(storedList);
    } else {
      return [];
    }
  }
}
