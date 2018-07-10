import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterecorddialogComponent } from './updaterecorddialog.component';

describe('ImportdatadialogComponent', () => {
  let component: UpdaterecorddialogComponent;
  let fixture: ComponentFixture<UpdaterecorddialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdaterecorddialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterecorddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
