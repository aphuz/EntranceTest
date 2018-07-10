import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportdatadialogComponent } from './importdatadialog.component';

describe('ImportdatadialogComponent', () => {
  let component: ImportdatadialogComponent;
  let fixture: ComponentFixture<ImportdatadialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportdatadialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportdatadialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
