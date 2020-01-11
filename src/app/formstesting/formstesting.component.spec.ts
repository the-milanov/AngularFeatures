import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstestingComponent } from './formstesting.component';

describe('FormstestingComponent', () => {
  let component: FormstestingComponent;
  let fixture: ComponentFixture<FormstestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormstestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormstestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
