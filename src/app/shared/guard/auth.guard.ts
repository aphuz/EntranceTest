import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../../modules/login/pages/login/login.component';
import {TokenStorage} from '../../token.storage';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private token: TokenStorage, private authService: AuthService) {}  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    	if( this.token.getToken() ) {
    		return true;   
    	}    	
    	alert("Unauthorized Access,Redirecting to Login");  
       	this.router.navigate(['login']);  
        return false;   	
    	  
  }
}