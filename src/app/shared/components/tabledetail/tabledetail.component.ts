import { Component, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';
import { UserService } from '../../services/user.service';
import { TableService } from '../../services/table.service';
import { CategoryService } from '../../services/category.service';
import { KindService } from '../../services/kind.service';
import { InterviewService } from '../../services/interview.service';
import { QuestionService } from '../../services/question.service';
import { AnswerService } from '../../services/answer.service';
import { FileService } from '../../services/file.service';
import {SelectionModel} from '@angular/cdk/collections';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

import { Table } from '../../models/table.model';
import { TABLES } from '../../mocks/mock-tables.mock';

@Component({
  selector: 'app-tabledetail',
  templateUrl: './tabledetail.component.html',
  styleUrls: ['./tabledetail.component.css']
})
export class TabledetailComponent implements OnInit {
 	@Input() tableName : string;
  @Input() skillName : string;
 	@ViewChild(MatSort) sort: MatSort;
 	@ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }  
 	
  constructor( private userService: UserService, 
               private tableService: TableService,
               private categoryService: CategoryService,
               private kindService: KindService,
               private interviewService: InterviewService,
               private questionService: QuestionService,
               private answerService: AnswerService,
               private fileService: FileService,
               private cdRef:ChangeDetectorRef

               ) { }
  dataSource;
  displayedColumns = TABLES[0].columns;
  columnsName = TABLES[0].columnName;
  selection = new SelectionModel(true, []);
  selectedIds;
  status: boolean = true;
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    this.status = false;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        (this.selection.clear(), this.status = true) :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  clickCheckBox(event: any){
    event.stopPropagation();
    
  }
  ngAfterViewChecked()
  {
    if(this.selection.selected.length > 0){
      this.status = false;
    }
    else {
      this.status = true;
    }
    this.cdRef.detectChanges();
    
  }
  ngOnInit() {
	}

  ngOnChanges(changes: SimpleChanges) {
    this.selection = new SelectionModel(true, []);
    if(this.tableService.table){
      this.displayedColumns = this.tableService.table.columns;
      this.columnsName = this.tableService.table.columnName;
    }
    if(this.tableName == "Category"){
      this.getCategories();
    }
    else if(this.tableName == "User"){
      this.getUsers();
    }
    else if(this.tableName == "Kind"){
      this.getKinds();
    }
    else if(this.tableName == "Interview"){
      this.getInterviews();
    }
    else if(this.tableName == "Question"){
        this.categoryService.getAllCategories().subscribe(results => {
          if(!results){
            return;
          }        
        });
        this.getQuestions(this.skillName);
        this.dataSource = new MatTableDataSource();
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
    else if(this.tableName == "Answer"){
      this.getAnswers();
    }
  }    
  
	getUsers(): void {
		this.userService.getAllUsers().subscribe(results => {
	    	if(!results){
    			return;
    		}        
    		this.dataSource = new MatTableDataSource(results);
    		this.dataSource.sort = this.sort;
    		this.dataSource.paginator = this.paginator;
    	});
	}

  getCategories(): void {
    this.categoryService.getAllCategories().subscribe(results => {
        if(!results){
          return;
        }        
        this.dataSource = new MatTableDataSource(results);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  getKinds(): void {
      this.kindService.getAllKinds().subscribe(results => {
          if(!results){
            return;
          }        
          this.dataSource = new MatTableDataSource(results);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
    }

  getInterviews(): void {
    this.interviewService.getAllInterviews().subscribe(results => {
        if(!results){
          return;
        }        
        this.dataSource = new MatTableDataSource(results);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  getQuestions(language: string): void {
    this.questionService.getQuestionsByProgrammingLanguage(language).subscribe(results => {
        if(!results){
          return;
        }        
        this.dataSource = new MatTableDataSource(results);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  getAnswers(): void {
    this.answerService.getAllAnswers().subscribe(results => {
        if(!results){
          return;
        }
        this.dataSource = new MatTableDataSource(results);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  exportExam(row: number): void {
    let interview =  this.dataSource.filteredData[row];
    if(interview != undefined && interview.interviewCode != "" && interview.technical != "" && interview.questionList != ""){
          this.fileService.exportExamByInterviewCodePDF(interview.technical, interview.interviewCode, interview.questionList).subscribe(
            (res) => {    
              console.log(res)        
              let file = new Blob([res], { type: 'application/pdf' });            
          var fileURL = URL.createObjectURL(file);
          window.open(fileURL);
                  });

    }
  } 

  exportAnswer(interviewCode :string): void{
    if(interviewCode != undefined && interviewCode != ""){
          this.fileService.getAnswerPDF(interviewCode).subscribe(
            (res) => {    
              console.log(res)        
              let file = new Blob([res], { type: 'application/pdf' });            
          var fileURL = URL.createObjectURL(file);
          window.open(fileURL);
                  });

    }
  }

  delete(){
    this.selectedIds = new Array();
    if(this.selection.selected.length > 0){
      if(confirm("Do you want to delete selected record(s)?" )){
        if(!this.isAllSelected()){
          this.selection.selected.forEach(element => {
            this.selectedIds.push(element[this.displayedColumns[1]]); 
          }); 
        }    
        this.tableService.deleteRecord(this.tableName, this.selectedIds).subscribe(results => {
          if(!results){
            return;
          }
          this.selection.selected.forEach(element => {
            let itemIndex = this.dataSource.data.findIndex(obj => obj[this.displayedColumns[1]] === element[this.displayedColumns[1]]);        
            this.dataSource.data.splice(itemIndex, 1);        
          }); 
                        
          this.selection = new SelectionModel<Element>(true, []);      
          this.dataSource.paginator = this.paginator;
          alert("Delete Successfully");
      });
    }
  }  
}

  deleteRecord(row: Object){
    if(confirm("Do you want to delete record ID: " + row[this.displayedColumns[1]])){
      if(this.tableName == 'User'){
        this.userService.deleteUserById(row['id']).subscribe(results => {
          if(!results){
            return;
          }              
        });
      }
      else if(this.tableName == 'Interview'){
        this.interviewService.deleteInterviewById(row['interviewId']).subscribe(results => {
          if(!results){
            return;
          }       
        });
      }
      else if(this.tableName == 'Question'){
        this.questionService.deleteQuestionById(row['questionId']).subscribe(results => {
          if(!results){
            return;
          }               
        });
      }
      let itemIndex = this.dataSource.data.findIndex(obj => obj[this.displayedColumns[1]] === row[this.displayedColumns[1]]);
      this.dataSource.data.splice(itemIndex, 1);
      this.dataSource.paginator = this.paginator;
      alert("Delete Successfully");
    }   
  }

  editRecord(row: Object){
    alert(111)
  }

}

