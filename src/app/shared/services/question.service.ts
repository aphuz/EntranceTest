import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionService {
  private getAllQuestionURL = "http://192.168.88.31:8080/getallquestions";
  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<Question[]>{  
  	return this.http.get<Question[]>(this.getAllQuestionURL);
  }
}
