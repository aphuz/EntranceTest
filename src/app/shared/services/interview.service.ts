import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interview } from '../models/interview.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InterviewService {
  private getAllInterviewURL = "http://192.168.88.31:8080/getallinterviews";
  constructor(private http: HttpClient) { }

  getAllInterviews(): Observable<Interview[]>{  
  	return this.http.get<Interview[]>(this.getAllInterviewURL);
  }
}
