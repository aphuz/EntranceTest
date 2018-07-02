import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question.model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { ApiService } from './api.service';
import { IRequestOptions } from '../models/iRequestOptions.model';

@Injectable()
export class QuestionService {
  constructor(private http: HttpService, private api: ApiService) { }

  getAllQuestions(): Observable<Question[]>{  
  	return this.http.get<Question[]>(this.api.getAllQuestionURL());
  }

  getQuestionsByProgrammingLanguage(language: string): Observable<Question[]>{  
  	return this.http.get<Question[]>(this.api.getQuestionsByProgrammingLanguageURL() + '/' + language);
  }

  deleteQuestionById(id: number) {  
  	let req: IRequestOptions = { responseType: 'text' };
  	return this.http.delete(this.api.deleteQuestionById() + '/' + id, req);
  }
}
