import { Component, OnInit } from '@angular/core';
import { Table } from '../../../../shared/models/table.model';
import {TokenStorage} from '../../../../token.storage';
import {Router} from '@angular/router';
import {AuthService} from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {

	tableName: String = "User";
  show: boolean = true;
  constructor(private router: Router, private token: TokenStorage, private authService: AuthService) { }

  ngOnInit() {
  }
  changeTable(table: Table){
  	this.tableName = table.tableName;
  }

  logout(){
    this.token.signOut();
    this.router.navigate(['login']);
  }
}
