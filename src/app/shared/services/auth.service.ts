import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { IRequestOptions } from '../models/iRequestOptions.model';
import { HttpService } from './http.service';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

  constructor(private http: HttpService, private api: ApiService) { }

  attemptAuth(username: string, password: string) {
    let headers = new HttpHeaders({
    'username':username,
	  'password':password
	});
    let req: IRequestOptions = { headers: headers, responseType: 'text' };
	return this.http.post(this.api.loginURL(),null, req);
  }
}
