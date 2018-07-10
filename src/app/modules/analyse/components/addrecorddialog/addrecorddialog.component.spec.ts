import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecorddialogComponent } from './addrecorddialog.component';

describe('AddrecorddialogComponent', () => {
  let component: AddrecorddialogComponent;
  let fixture: ComponentFixture<AddrecorddialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrecorddialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecorddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
