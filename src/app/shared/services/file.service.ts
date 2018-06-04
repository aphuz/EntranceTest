import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FileService {

	private getQuestionPDFURL = "http://192.168.88.31:8080/exportRandomExamination";
  private exportExamByInterviewCode = "http://192.168.88.31:8080/exportExamByInterviewCode";
	private getAnswerPDFURL = "http://192.168.88.31:8080/exportanswerPDF/";
  private uploadFileURL = 'http://192.168.88.31:8080/uploadfile';
  constructor(private http: HttpClient) { }

 	getQuestionPDF(technical: string, interviewName: string, description: string) { 
      let formData: FormData = new FormData();
      formData.append('technical', technical); 
      formData.append('interviewName', interviewName); 
      formData.append('description', description); 

  		return this.http.post(this.getQuestionPDFURL, formData, { responseType: 'blob' });
  	}

  exportExamByInterviewCodePDF(technical: string, interviewCode: string, questionList: string) { 
      let formData: FormData = new FormData();
      formData.append('technical', technical); 
      formData.append('interviewCode', interviewCode); 
      formData.append('questionList', questionList); 
      
      return this.http.post(this.exportExamByInterviewCode, formData, { responseType: 'blob' });
    }

  getAnswerPDF(interviewName: string) {  
  		return this.http.get(this.getAnswerPDFURL+interviewName, { responseType: 'blob' });      
	}

	postFile(fileToUpload: File): Observable<boolean> {    	
    	let formData: FormData = new FormData();
    	formData.append('file', fileToUpload, fileToUpload.name);
    	return this.http
      		.post(this.uploadFileURL, formData,  { responseType: 'text' })
      		.map(() => { return true; });
	}
}
