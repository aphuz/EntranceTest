import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Table } from '../../models/table.model';
import { TABLES } from '../../mocks/mock-tables.mock';
import { TableService } from '../../services/table.service';
import { FileService } from '../../services/file.service';
import { LoaderService } from '../../services/loader.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExportAnswerListDialogComponent } from '../export-answer-list-dialog/export-answer-list-dialog.component';
import { ExportQuestionListDialogComponent } from '../export-question-list-dialog/export-question-list-dialog.component';
import { ImportdatadialogComponent } from '../importdatadialog/importdatadialog.component';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

	@Output() tablePicked = new EventEmitter<Table>();
	
	tables = TABLES;
	technical: string;
	interviewCode: string;
	interviewName: string;
	description: string;
	selectedTable: Table = this.tables[0];

	constructor(
		private tableService: TableService,
		private fileService: FileService, 
		private loaderService: LoaderService,
		public dialog: MatDialog
	) { }

	ngOnInit() {
    }

	onSelect(table: Table): void {				
		this.selectedTable = table;
    	this.tablePicked.emit(table); 
    	this.tableService.insertData(table);	    
	}

	openAnswerList() {
		let dialogRef = this.dialog.open(ExportAnswerListDialogComponent, {
		  	data: { interviewCode: this.interviewCode }
	    });

	    dialogRef.afterClosed().subscribe(result => {	    
	        if(result != undefined && result.interviewCode != "" && result.interviewCode != undefined){
	        	this.loaderService.display(true);
	      		this.fileService.getAnswerPDF(result.interviewCode).subscribe(
			        (res) => { 		
			        	console.log(res)        
			        	let file = new Blob([res], { type: 'application/pdf' });            
						var fileURL = URL.createObjectURL(file);
						window.open(fileURL);
						        });
				this.loaderService.display(false);
	      	}
    });
  }

  openQuestionList() {
  	let dialogRef = this.dialog.open(ExportQuestionListDialogComponent, {
	  	data: { technical: this.technical, interviewName: this.interviewName, description: this.description }
    });

    dialogRef.afterClosed().subscribe(result => {


    	if(result != undefined && result.technical != "" && result.technical != undefined){
    		this.loaderService.display(true);
    		if(result.interviewName == undefined){
    			result.interviewName = "";
    		}    		
    		if(result.description == undefined){
    			result.description = "";
    			alert(result.description)
    		}

     		this.fileService.getQuestionPDF(result.technical, result.interviewName, result.description).subscribe(
		        (res) => { 		
		        	console.log(res)        
		        	let file = new Blob([res], { type: 'application/pdf' });            
					var fileURL = URL.createObjectURL(file);
					window.open(fileURL);
					        });
			this.loaderService.display(false);
    	}
    });
  }

  openImportData() {
  	let dialogRef = this.dialog.open(ImportdatadialogComponent, {
    });
  }
}
