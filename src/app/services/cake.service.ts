import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private http: HttpClient) { }

  addCake(cake: any){
    return this.http.post("http://localhost:8080/cake/v1",cake);
  }
  getCakeByType(cakeType: string){
    return this.http.get(`http://localhost:8080/cake/v1?cakeType=${cakeType}`)
  }
}
