import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-export-answer-list-dialog',
  templateUrl: './export-answer-list-dialog.component.html',
  styleUrls: ['./export-answer-list-dialog.component.css']
})
export class ExportAnswerListDialogComponent implements OnInit {

  constructor(public answerListDialog: MatDialogRef<ExportAnswerListDialogComponent>,
  			  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.answerListDialog.close();
  }
}
