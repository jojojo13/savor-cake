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
  updateCake(cake: any){
    return this.http.put("http://localhost:8080/cake/v1",cake);
  }
  deleteCake(cakeID: any){
    return this.http.delete(`http://localhost:8080/cake/v1?cakeID=${cakeID}`);
  }
  getCakeByType(cakeType: string){
    return this.http.get(`http://localhost:8080/cake/v1?cakeType=${cakeType}`)
  }
  getAllCake(){
    return this.http.get('http://localhost:8080/cake/v1/all')
  }

  getAllAccessory(){
    return this.http.get('http://localhost:8080/accessory/v1/all')
  }
  addBilling(bill:any){
    return this.http.post("http://localhost:8080/billing/v1",bill);
  }
  getAllBilling(billStatus:string){
    return this.http.get(`http://localhost:8080/billing/v1?status=${billStatus}`);
  }
  updateBill(billUpdateRequest:any){
    return this.http.put(`http://localhost:8080/billing/v1`,billUpdateRequest);
  }

  getTotalDashboard(){
    return this.http.get(`http://localhost:8080/dashboard/v1`);
  }
  getChartDashboard(by:any){
    return this.http.get(`http://localhost:8080/dashboard/v1/static?by=${by}`);
  }
}
