import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  addCakeToCart(cake:any){
    localStorage.setItem(cake.id, JSON.stringify(cake));
  }

  getAllCakesromLocalStorage() {
    let cakes = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key !== null) {
            let itemString = localStorage.getItem(key);
            if (itemString !== null) {
                let item = JSON.parse(itemString);
                cakes.push(item);
            }
        }
    }
    return cakes;
}
}
