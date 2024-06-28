import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AthenticateGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authenticationService.getToken()){
      return true;
    }
    this.router.navigateByUrl("admin/login");
    Swal.fire({
      title: 'Bạn chưa đăng nhập',
      text: 'Bạn sẽ được chuyển hướng tới trang đăng nhập.',
      icon: 'info',
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: 'Chuyển hướng',
      allowOutsideClick: false, // Prevent closing by clicking outside
    }).then((result) => {
      if (result.isConfirmed || result.dismiss === Swal.DismissReason.close) {
        this.router.navigateByUrl("admin/login"); // Replace with your login page URL
      }
    });
   
    return false;
  }
  
}
