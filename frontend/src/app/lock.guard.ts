import { LoginService } from './services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LockGuard implements CanActivate {

  constructor(private router: Router,private login:LoginService) {}

  canActivate():boolean {
    if (this.login.loggedIn()){
      return true
    }
    else{
      alert("You are currently not logged in, please Login!")
      this.router.navigate( ["/login"] );
      
        return false
      
    }
}
  
  
}
