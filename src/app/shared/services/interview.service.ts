import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interview } from '../models/interview.model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { IRequestOptions } from '../models/iRequestOptions.model';
import { ApiService } from './api.service';
import { DropdownBase } from '../models/base-dropdown';
import { EntityBase }     from '../models/entity-base';
import { TextboxBase }  from '../models/base-textbox';

@Injectable()
export class InterviewService {
  constructor(private http: HttpService, private api: ApiService) { }

  getAllInterviews(): Observable<Interview[]>{  
  	return this.http.get<Interview[]>(this.api.getAllInterviewURL());
  }
  
  deleteInterviewById(id: number) {  
  	let req: IRequestOptions = { responseType: 'text' };
  	return this.http.delete(this.api.deleteInterviewById() + '/' + id, req);
  }

  update(interview: Interview){
    let req: IRequestOptions = { responseType: 'text' };
  	return this.http.put(this.api.updateInterview(), interview, req);
  }
}
