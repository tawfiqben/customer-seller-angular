import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard {

  constructor(private authService : AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const requiredPermission = route.data['roles'];
    if(this.authService.isAuthenticated) {
      return true;
    }else {
      //this.router.navigateByUrl('/login')
      this.router.navigate(['/error']);
      return false;
    }
  }
  
}