import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../models/answer.model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { ApiService } from './api.service';

import { IRequestOptions } from '../models/iRequestOptions.model';

@Injectable()
export class AnswerService {
  constructor(private http: HttpService, private api: ApiService) { }

  getAllAnswers(): Observable<Answer[]>{  
  	return this.http.get<Answer[]>(this.api.getAllAnswerURL());
  }
}
