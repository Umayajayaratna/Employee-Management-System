import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRefFormComponent } from './delete-ref-form.component';

describe('DeleteRefFormComponent', () => {
  let component: DeleteRefFormComponent;
  let fixture: ComponentFixture<DeleteRefFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRefFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRefFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
