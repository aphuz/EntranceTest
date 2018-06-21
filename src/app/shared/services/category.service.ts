import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { ApiService } from './api.service';
import { IRequestOptions } from '../models/iRequestOptions.model';

@Injectable()
export class CategoryService {
  constructor(private http: HttpService, private api: ApiService) { }

  getAllCategories(): Observable<Category[]>{  
  	return this.http.get<Category[]>(this.api.getAllCategoryURL());
  }
}
