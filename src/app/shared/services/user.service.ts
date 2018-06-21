import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { ApiService } from './api.service';
import { IRequestOptions } from '../models/iRequestOptions.model';

@Injectable()
export class UserService {
  constructor(private http: HttpService, private api: ApiService) { }

  getAllUsers(): Observable<User[]>{  
  	return this.http.get<User[]>(this.api.getAllUserURL());
  }
}
