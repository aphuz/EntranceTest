import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { IRequestOptions } from '../models/iRequestOptions.model';
import { HttpService } from './http.service';

@Injectable()
export class AuthService {
  
  private loginURL =  "http://localhost:8080/login";
  constructor(private http: HttpService) { }

  attemptAuth(username: string, password: string) {
    let headers = new HttpHeaders({
    'username':username,
	'password':password
	});
    let req: IRequestOptions = { headers: headers, responseType: 'text' };
	return this.http.post(this.loginURL,null, req);
  }
}
