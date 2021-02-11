import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRefFormComponent } from './update-ref-form.component';

describe('UpdateRefFormComponent', () => {
  let component: UpdateRefFormComponent;
  let fixture: ComponentFixture<UpdateRefFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRefFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRefFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
