import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { ApiService } from './api.service';
import { IRequestOptions } from '../models/iRequestOptions.model';
import { DropdownBase } from '../models/base-dropdown';
import { EntityBase }     from '../models/entity-base';
import { TextboxBase }  from '../models/base-textbox';

@Injectable()
export class UserService {
  constructor(private http: HttpService, private api: ApiService) { }

  getAllUsers(): Observable<User[]>{  
  	return this.http.get<User[]>(this.api.getAllUserURL());
  }

  deleteUserById(id: number) {  
  	let req: IRequestOptions = { responseType: 'text' };
  	return this.http.delete(this.api.deleteUserById() + '/' + id, req);
  }

  update(user: User){
    let req: IRequestOptions = { responseType: 'text' };
  	return this.http.put(this.api.updateUser(), user, req);
  }

  add(user: User){
    let req: IRequestOptions = { responseType: 'text' }
    return this.http.post(this.api.updateUser(), user, req);
  }

  getUsers() {
    
       let entities: EntityBase<any>[] = [
    
        new DropdownBase({
           key: 'role',
           label: 'Role',
           options: [
             {key: 'ROLE_ADMIN',  value: 'ADMIN'},
             {key: 'ROLE_USER',  value: 'USER'}
           ],
           order: 3
         }),
    
        new TextboxBase({
           key: 'name',
           label: 'User name',
           type: 'text',
           order: 1
         }),
    
        new TextboxBase({
           key: 'password',
           label: 'Password',
           type: 'password',
           order: 2
         })
       ];

       return entities.sort((a, b) => a.order - b.order);
     }
}
