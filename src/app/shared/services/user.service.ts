import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private getAllUserURL = "http://192.168.88.31:8080/getallusers";
  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<User[]>{  
  	return this.http.get<User[]>(this.getAllUserURL);
  }
}
