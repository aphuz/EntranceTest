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

import { Table } from '../../models/table.model';
import { TABLES } from '../../mocks/mock-tables.mock';

@Component({
  selector: 'app-tabledetail',
  templateUrl: './tabledetail.component.html',
  styleUrls: ['./tabledetail.component.css']
})
export class TabledetailComponent implements OnInit {
 	@Input() tableName : String;
 	@ViewChild(MatSort) sort: MatSort;
 	@ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
 	dataSource;
 	displayedColumns = TABLES[0].columns;

  constructor( private userService: UserService, 
               private tableService: TableService,
               private categoryService: CategoryService,
               private kindService: KindService,
               private interviewService: InterviewService,
               private questionService: QuestionService,
               private answerService: AnswerService,
               private fileService: FileService

               ) { }

  ngOnInit() {
		this.getUsers();
	}

  ngOnChanges(changes: SimpleChanges) {    
    if(this.tableService.table){
      this.displayedColumns = this.tableService.table.columns;
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
      this.getQuestions();
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

  getQuestions(): void {
    this.questionService.getAllQuestions().subscribe(results => {
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
    console.log(this.dataSource.filteredData[row])
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

}
