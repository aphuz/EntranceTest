import { Injectable } from '@angular/core';
import { Api } from '../models/api.model';
import { APIs } from '../mocks/api.mock';

@Injectable()
export class ApiService {

  serverIP = "http://192.168.88.31:8080";
  constructor() { }


  getAllAnswerURL(){
  	return this.serverIP + APIs[0].url;
  }

  loginURL(){
  	return this.serverIP + APIs[1].url;
  }

  getAllCategoryURL(){
  	return this.serverIP + APIs[2].url;
  }

  getQuestionPDFURL(){
  	return this.serverIP + APIs[3].url;
  }

  exportExamByInterviewCode(){
  	return this.serverIP + APIs[4].url;
  }

  getAnswerPDFURL(){
  	return this.serverIP + APIs[5].url;
  }

  uploadFileURL(){
  	return this.serverIP + APIs[6].url;
  }

  getAllInterviewURL(){
  	return this.serverIP + APIs[7].url;
  }

  getAllKindURL(){
  	return this.serverIP + APIs[8].url;
  }

  getQuestionsByProgrammingLanguageURL(){
  	return this.serverIP + APIs[9].url;
  }

  getAllQuestionURL(){
  	return this.serverIP + APIs[10].url;
  }

  getAllUserURL(){
  	return this.serverIP + APIs[11].url;
  }

  deleteUserById(){
    return this.serverIP + APIs[12].url;
  }

  deleteInterviewById(){
    return this.serverIP + APIs[13].url;
  }
}

