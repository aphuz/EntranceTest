import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
 
import { EntityBase }              from '../../models/entity-base';
import { BaseControlService }    from '../../services/base-control.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { QuestionService } from '../../services/question.service';
import { AddrecorddialogComponent } from '../../../modules/analyse/components/addrecorddialog/addrecorddialog.component';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ BaseControlService ]
})
export class DynamicFormComponent implements OnInit {
 
  @Input() entities: EntityBase<any>[] = [];
  @Input() status: string;
  form: FormGroup;
  payLoad = '';
 
  constructor(private qcs: BaseControlService, private userService: UserService, private questionService: QuestionService, 
              public addRecordDialog: MatDialogRef<AddrecorddialogComponent>) {  }
 
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.entities);
  }
 
  onSubmit() {
    var object = this.form.value;
    var service;

     if(this.status === "Add User"){
      service = this.userService;      
    }
    else if(this.status === "Add Question"){
      service = this.questionService; 
    }    

    service.add(object).subscribe(
      (res) => { 		
        alert("Added Successfully!");
        this.addRecordDialog.close();
            },
      (err) => {
        console.log(err)
      });
  }
}