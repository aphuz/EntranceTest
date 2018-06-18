import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import {AuthService} from '../../../../shared/services/auth.service';
import {TokenStorage} from '../../../../token.storage';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

	hide = true;
	username: string;
	password: string;

  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService, private token: TokenStorage) { }

  ngOnInit() {
  	}

  login(){
  	   this.authService.attemptAuth(this.username, this.password).subscribe(
        data => {
          this.token.saveToken(data.toString());
          this.router.navigate(['analyse']);
        }
      );
   }
}
