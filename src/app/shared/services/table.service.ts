import { Injectable } from '@angular/core';
import { Table } from '../models/table.model';
import { HttpService } from './http.service';
import { IRequestOptions } from '../models/iRequestOptions.model';
import { ApiService } from './api.service';

@Injectable()
export class TableService {

  	constructor(private http: HttpService, private api: ApiService) { }

  	table: Table;

	insertData(data: Table){
	    this.table = data;
	}

	deleteRecord(tableName: string, selectedIds: string){
		let formData: FormData = new FormData();
		formData.append('tableName', tableName); 
		formData.append('selectedIds', selectedIds); 
		let req: IRequestOptions = { responseType: 'text' };
		return this.http.post(this.api.deleteAllRecords(), formData, req);
	}
}
