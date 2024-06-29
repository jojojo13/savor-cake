import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  loginForm:any;
  loginMsg:any;
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login(formValue:any){
    this.authenticationService.login(formValue).subscribe((res:any)=>{
      localStorage.setItem('token',res.token);
      localStorage.setItem('username',res.username);
      this.authenticationService.loginTrack.next(true);
      this.router.navigateByUrl("admin/dashboard")
    },(err) =>{
      this.loginMsg = "Tài khoản hoặc mật khẩu không chính xác, xin vui lòng thử lại!";
    })
  }

}
