import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpService } from './http.service';
import { IRequestOptions } from '../models/iRequestOptions.model';
import { ApiService } from './api.service';

@Injectable()
export class FileService {

  constructor(private http: HttpService, private api: ApiService) { }

 	getQuestionPDF(technical: string, interviewName: string, description: string) { 
      let formData: FormData = new FormData();
      formData.append('technical', technical); 
      formData.append('interviewName', interviewName); 
      formData.append('description', description); 
      let req: IRequestOptions = { responseType: 'blob' };
  		return this.http.post(this.api.getQuestionPDFURL(), formData, req);
  	}

  exportExamByInterviewCodePDF(technical: string, interviewCode: string, questionList: string) { 
      let formData: FormData = new FormData();
      formData.append('technical', technical); 
      formData.append('questionList', questionList); 
      let req: IRequestOptions = { responseType: 'blob' };
      return this.http.post(this.api.exportExamByInterviewCode()+ '/' + interviewCode, formData, req);
    }

  getAnswerPDF(interviewName: string) {  
      let req: IRequestOptions = { responseType: 'blob' };
  		return this.http.get(this.api.getAnswerPDFURL()+ '/' +interviewName, req);      
	}

	postFile(fileToUpload: File): Observable<boolean> {    	
    	let formData: FormData = new FormData();
    	formData.append('file', fileToUpload, fileToUpload.name);
      let req: IRequestOptions = { responseType: 'blob' };
    	return this.http
      		.post(this.api.uploadFileURL(), formData,  req)
      		.map(() => { return true; });
	}
}
