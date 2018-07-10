import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-export-question-list-dialog',
  templateUrl: './export-question-list-dialog.component.html',
  styleUrls: ['./export-question-list-dialog.component.css']
})
export class ExportQuestionListDialogComponent implements OnInit {

  level1: number = 5;
  level2: number = 5;
  level3: number = 5;
  total:number = this.level1 + this.level2 + this.level3;
  multipleAnswer: number = this.total / 3;
  singleAnswer: number = this.total /3;
  shortAnswer: number = this.total - this.multipleAnswer - this.singleAnswer;

  constructor(public questionListDialog: MatDialogRef<ExportQuestionListDialogComponent>,
  			      @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.questionListDialog.close();
  }

  onChange($event) {
    this.total = this.level1 + this.level2 + this.level3;
    this.multipleAnswer = this.total / 3;
    this.singleAnswer = this.total /3;
    this.shortAnswer = this.total - this.multipleAnswer - this.singleAnswer;

  }
}
