import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { IRequestOptions } from '../models/iRequestOptions.model';

@Injectable()
export class UserService {
  private getAllUserURL = "http://192.168.88.31:8080/getallusers";
  constructor(private http: HttpService) { }


  getAllUsers(): Observable<User[]>{  
  	return this.http.get<User[]>(this.getAllUserURL);
  }
}
