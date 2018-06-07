import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question.model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { IRequestOptions } from '../models/iRequestOptions.model';

@Injectable()
export class QuestionService {
  private getAllQuestionURL = "http://192.168.88.31:8080/getallquestions";
  private getQuestionsByProgrammingLanguageURL = "http://192.168.88.31:8080/getQuestionsByProgrammingLanguage";
  constructor(private http: HttpService) { }

  getAllQuestions(): Observable<Question[]>{  
  	return this.http.get<Question[]>(this.getAllQuestionURL);
  }

  getQuestionsByProgrammingLanguage(language: string): Observable<Question[]>{  
  	return this.http.get<Question[]>(this.getQuestionsByProgrammingLanguageURL + '/' + language);
  }
}
