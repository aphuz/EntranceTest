import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
          MatAutocompleteModule,
          MatButtonModule,
          MatButtonToggleModule,
          MatCardModule,
          MatCheckboxModule,
          MatChipsModule,
          MatDatepickerModule,
          MatDialogModule,
          MatDividerModule,
          MatExpansionModule,
          MatGridListModule,
          MatIconModule,
          MatInputModule,
          MatListModule,
          MatMenuModule,
          MatNativeDateModule,
          MatPaginatorModule,
          MatProgressBarModule,
          MatProgressSpinnerModule,
          MatRadioModule,
          MatRippleModule,
          MatSelectModule,
          MatSidenavModule,
          MatSliderModule,
          MatSlideToggleModule,
          MatSnackBarModule,
          MatSortModule,
          MatStepperModule,
          MatTableModule,
          MatTabsModule,
          MatToolbarModule,
          MatTooltipModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { LoginComponent } from './modules/login/pages/login/login.component';
import { AnalyseComponent } from './shared/components/analyse/analyse.component';
import { SidemenuComponent } from './shared/components/sidemenu/sidemenu.component';
import { TabledetailComponent } from './shared/components/tabledetail/tabledetail.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ExportAnswerListDialogComponent } from './shared/components/export-answer-list-dialog/export-answer-list-dialog.component';
import { ExportQuestionListDialogComponent } from './shared/components/export-question-list-dialog/export-question-list-dialog.component';
import { ImportdatadialogComponent } from './shared/components/importdatadialog/importdatadialog.component';

import { UserService } from './shared/services/user.service';
import { TableService } from './shared/services/table.service';
import { CategoryService } from './shared/services/category.service';
import { KindService } from './shared/services/kind.service';
import { InterviewService } from './shared/services/interview.service';
import { QuestionService } from './shared/services/question.service';
import { AnswerService } from './shared/services/answer.service';
import { FileService } from './shared/services/file.service';
import { LoaderService } from './shared/services/loader.service';
import { LoginformComponent } from './modules/login/components/loginform/loginform.component';
import { BubblesComponent } from './modules/login/components/bubbles/bubbles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnalyseComponent,
    SidemenuComponent,
    TabledetailComponent,
    HeaderComponent,
    ExportAnswerListDialogComponent,
    ExportQuestionListDialogComponent,
    ImportdatadialogComponent,
    LoginformComponent,
    BubblesComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  entryComponents: [SidemenuComponent, ExportAnswerListDialogComponent, ExportQuestionListDialogComponent, ImportdatadialogComponent],
  providers: [UserService, TableService, CategoryService, KindService, InterviewService, QuestionService, AnswerService, FileService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
