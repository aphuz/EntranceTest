import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {
  private getAllCategoryURL = "http://192.168.88.31:8080/getallcategories";
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]>{  
  	return this.http.get<Category[]>(this.getAllCategoryURL);
  }
}
