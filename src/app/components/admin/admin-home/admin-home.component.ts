import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';




export class FileUpload {
  key: string | undefined;
  name = '';
  url: string | undefined;
  file: File;
  constructor(file: File) {
    this.file = file;
  }
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})

export class AdminHomeComponent implements OnInit {
  username: any;
  isLogin = false;
  constructor(private router: Router, private authService: AuthenticationService) {

  }
  ngOnInit(): void {
    this.authService.loginTrack.subscribe(login => {
      this.isLogin = true;
      this.username = "Admin";
      if (localStorage.getItem("username")) {
        this.username = localStorage.getItem("username");
      }
    })

  }

  logout() {
    this.isLogin= false;
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigateByUrl("admin/login")
  }
}
