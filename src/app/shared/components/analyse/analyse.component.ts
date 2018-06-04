import { Component, OnInit } from '@angular/core';
import { Table } from '../../models/table.model';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {

	tableName: String = "User";

  constructor() { }

  ngOnInit() {
  }
  changeTable(table: Table){
  	this.tableName = table.tableName;
  }
}
