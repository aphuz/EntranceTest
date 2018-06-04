import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportAnswerListDialogComponent } from './export-answer-list-dialog.component';

describe('ExportAnswerListDialogComponent', () => {
  let component: ExportAnswerListDialogComponent;
  let fixture: ComponentFixture<ExportAnswerListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportAnswerListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportAnswerListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
