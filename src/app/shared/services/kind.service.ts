import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kind } from '../models/kind.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KindService {
	private getAllKindURL = "http://192.168.88.31:8080/getallkinds";
  	constructor(private http: HttpClient) { }

  	getAllKinds(): Observable<Kind[]>{  
  		return this.http.get<Kind[]>(this.getAllKindURL);
  	}
}
