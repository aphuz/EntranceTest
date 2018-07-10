import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportQuestionListDialogComponent } from './export-question-list-dialog.component';

describe('ExportQuestionListDialogComponent', () => {
  let component: ExportQuestionListDialogComponent;
  let fixture: ComponentFixture<ExportQuestionListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportQuestionListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportQuestionListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
