import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kind } from '../models/kind.model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { ApiService } from './api.service';
import { IRequestOptions } from '../models/iRequestOptions.model';

@Injectable()
export class KindService {
  	constructor(private http: HttpService, private api: ApiService) { }

  	getAllKinds(): Observable<Kind[]>{  
  		return this.http.get<Kind[]>(this.api.getAllKindURL());
  	}
}
