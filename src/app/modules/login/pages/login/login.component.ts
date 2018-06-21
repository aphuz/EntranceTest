import { Component, OnInit, Inject } from '@angular/core';
import {TokenStorage} from '../../../../token.storage';
import {Router} from '@angular/router';
import {AuthService} from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private token: TokenStorage, private authService: AuthService) {
  	if(this.token.getToken()){
  		if(window.confirm("Logged! Do you want to logout?")){
  			this.token.signOut();
  		} 
  		else {
  		 	this.router.navigate(['analyse']);
  		} 			
  	}
  }

  ngOnInit() {
  }

  

}
