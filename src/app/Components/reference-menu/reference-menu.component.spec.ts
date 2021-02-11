import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceMenuComponent } from './reference-menu.component';

describe('ReferenceMenuComponent', () => {
  let component: ReferenceMenuComponent;
  let fixture: ComponentFixture<ReferenceMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
