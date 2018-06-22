import { Component, OnInit } from '@angular/core';
import { Table } from '../../../../shared/models/table.model';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {

	tableName: String = "User";
  skillName: String;
  show: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  changeTable(table: Table){
  	this.tableName = table.tableName;
  }

  changeSkill(skill: String){
    this.skillName = skill;
  }
}
