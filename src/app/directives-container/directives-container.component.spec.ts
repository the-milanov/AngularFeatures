import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesContainerComponent } from './directives-container.component';

describe('DirectivesContainerComponent', () => {
  let component: DirectivesContainerComponent;
  let fixture: ComponentFixture<DirectivesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
