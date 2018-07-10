import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question.model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { ApiService } from './api.service';
import { IRequestOptions } from '../models/iRequestOptions.model';
import { DropdownBase } from '../models/base-dropdown';
import { EntityBase }     from '../models/entity-base';
import { TextboxBase }  from '../models/base-textbox';

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

  update(question: Question){
    let req: IRequestOptions = { responseType: 'text' };
  	return this.http.put(this.api.updateQuestion(), question, req);
  }

  add(question: Question){
    let req: IRequestOptions = { responseType: 'text' };
  	return this.http.post(this.api.addQuestion(), question, req);
  }

  getQuestions() {
    
       let entities: EntityBase<any>[] = [
        new DropdownBase({
          key: 'categoryId',
          label: 'Category',
          options: [
            {key: 'java',  value: 'Java'},
            {key: 'c++',  value: 'C++'},
            {key: 'python',  value: 'Python'}
          ],
          order: 3
        }),
        new DropdownBase({
          key: 'kindId',
          label: 'Kind',
          options: [
            {key: 'MultipleAnswer',  value: 'MultipleAnswer'},
            {key: 'SingleAnswer',  value: 'SingleAnswer'},
            {key: 'ShortQuestion',  value: 'ShortQuestion'}
          ],
          order: 3
        }),
        new DropdownBase({
          key: 'level',
          label: 'Level',
          options: [
            {key: '1',  value: 'Hard'},
            {key: '2',  value: 'Normal'},
            {key: '3',  value: 'Easy'}
          ],
          order: 1
        }),
    
         new TextboxBase({
           key: 'questionText',
           label: 'Question Text',
           order: 2
         }),
    
         new TextboxBase({
           key: 'correctAnswer',
           label: 'Correct Answer',
           type: 'text',
           order: 4
         })
       ];

       return entities.sort((a, b) => a.order - b.order);
     }
}
