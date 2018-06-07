import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpService } from './http.service';
import { IRequestOptions } from '../models/iRequestOptions.model';

@Injectable()
export class FileService {

	private getQuestionPDFURL = "http://192.168.88.31:8080/exportRandomExamination";
  private exportExamByInterviewCode = "http://192.168.88.31:8080/exportExamByInterviewCode";
	private getAnswerPDFURL = "http://192.168.88.31:8080/exportanswerPDF/";
  private uploadFileURL = 'http://192.168.88.31:8080/uploadfile';
  constructor(private http: HttpService) { }

 	getQuestionPDF(technical: string, interviewName: string, description: string) { 
      let formData: FormData = new FormData();
      formData.append('technical', technical); 
      formData.append('interviewName', interviewName); 
      formData.append('description', description); 
      let req: IRequestOptions = { responseType: 'blob' };
  		return this.http.post(this.getQuestionPDFURL, formData, req);
  	}

  exportExamByInterviewCodePDF(technical: string, interviewCode: string, questionList: string) { 
      let formData: FormData = new FormData();
      formData.append('technical', technical); 
      formData.append('interviewCode', interviewCode); 
      formData.append('questionList', questionList); 
      let req: IRequestOptions = { responseType: 'blob' };
      return this.http.post(this.exportExamByInterviewCode, formData, req);
    }

  getAnswerPDF(interviewName: string) {  
      let req: IRequestOptions = { responseType: 'blob' };
  		return this.http.get(this.getAnswerPDFURL+interviewName, req);      
	}

	postFile(fileToUpload: File): Observable<boolean> {    	
    	let formData: FormData = new FormData();
    	formData.append('file', fileToUpload, fileToUpload.name);
      let req: IRequestOptions = { responseType: 'blob' };
    	return this.http
      		.post(this.uploadFileURL, formData,  req)
      		.map(() => { return true; });
	}
}
