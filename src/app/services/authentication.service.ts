import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginTrack = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }
  
  getToken(){
    return localStorage.getItem('token');
  }
  login(loginRequest:any){
    return this.http.post("http://localhost:8080/auth/v1/login",loginRequest);
  }
}
