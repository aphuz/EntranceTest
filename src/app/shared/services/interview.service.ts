import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interview } from '../models/interview.model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { IRequestOptions } from '../models/iRequestOptions.model';

@Injectable()
export class InterviewService {
  private getAllInterviewURL = "http://192.168.88.31:8080/getallinterviews";
  constructor(private http: HttpService) { }

  getAllInterviews(): Observable<Interview[]>{  
  	return this.http.get<Interview[]>(this.getAllInterviewURL);
  }
}
