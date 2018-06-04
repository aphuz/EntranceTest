import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../models/answer.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AnswerService {
  private getAllAnswerURL = "http://192.168.88.31:8080/getallanswers";
  constructor(private http: HttpClient) { }

  getAllAnswers(): Observable<Answer[]>{  
  	return this.http.get<Answer[]>(this.getAllAnswerURL);
  }
}
