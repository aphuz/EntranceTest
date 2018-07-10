import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FileService } from '../../../../shared/services/file.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { UserService } from '../../../../shared/services/user.service';
import { InterviewService } from '../../../../shared/services/interview.service';
import { QuestionService } from '../../../../shared/services/question.service';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-addrecorddialog',
  templateUrl: './addrecorddialog.component.html',
  styleUrls: ['./addrecorddialog.component.css']
})
export class AddrecorddialogComponent implements OnInit {

  constructor(
              private fileService: FileService,
              private loaderService: LoaderService,
              private userService: UserService,
              private interviewService: InterviewService,
              private questionService: QuestionService,
              public addRecordDialog: MatDialogRef<AddrecorddialogComponent>,
  			      @Inject(MAT_DIALOG_DATA) public data: any
              ) { 
               
              }
  
  entities: any[];
  props: any;
  recordValue: any;
  status: string;
  ngOnInit() {
    this.status = this.data.status + " " + this.data.tableName; 
    this.entities = this.data.entities;     
  }

  onNoClick(): void {
    this.addRecordDialog.close();
  }
  
  hasProp(o, name) {
    return o.hasOwnProperty(name + "Id");
  }
  
  submit(){
    this.addRecordDialog.close();
  }
}
