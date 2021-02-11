import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReferenceFormComponent } from './add-reference-form.component';

describe('AddReferenceFormComponent', () => {
  let component: AddReferenceFormComponent;
  let fixture: ComponentFixture<AddReferenceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReferenceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReferenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
