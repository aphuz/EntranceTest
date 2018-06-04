import { Injectable } from '@angular/core';
import { Table } from '../models/table.model';

@Injectable()
export class TableService {

  	constructor() { }

  	table: Table;

	insertData(data: Table){
	    this.table = data;
	}
}
