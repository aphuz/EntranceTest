import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FileService } from '../../../../shared/services/file.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { UserService } from '../../../../shared/services/user.service';
import { InterviewService } from '../../../../shared/services/interview.service';
import { QuestionService } from '../../../../shared/services/question.service';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-updaterecorddialog',
  templateUrl: './updaterecorddialog.component.html',
  styleUrls: ['./updaterecorddialog.component.css']
})
export class UpdaterecorddialogComponent implements OnInit {

  constructor(
              private fileService: FileService,
              private loaderService: LoaderService,
              private userService: UserService,
              private interviewService: InterviewService,
              private questionService: QuestionService,
              public updateRecordDialog: MatDialogRef<UpdaterecorddialogComponent>,
  			      @Inject(MAT_DIALOG_DATA) public data: any
              ) { }
  

  props: any;
  recordValue: any;
  status: string;
  ngOnInit() {
    this.recordValue = this.data.record;
    this.props = Object.keys(this.data.record);
    this.status = this.data.status + " " + this.data.tableName;
  }

  onNoClick(): void {
    this.updateRecordDialog.close();
  }
  
  hasProp(o, name) {
    return o.hasOwnProperty(name + "Id");
  }
  
  submit(){
    let tableName = this.data.tableName;
    if(tableName == "User"){
      this.userService.update(this.recordValue).subscribe(results => {
        if(!results){
          return;
        }              
      });
    }
    else if(tableName == "Question") {
      this.questionService.update(this.recordValue).subscribe(results => {
        if(!results){
          return;
        }              
      });
    }
    else if(tableName == "Interview") {
      this.interviewService.update(this.recordValue).subscribe(results => {
        if(!results){
          return;
        }              
      });
    }
    this.updateRecordDialog.close();
    alert("Update Successully!");
  }
}
