import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

	hide = true;
	username: string;
	password: string;

  	constructor() { }

  	ngOnInit() {
  	}

  	login(){
  	alert(this.username)
  }

}
