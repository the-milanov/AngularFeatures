import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesOverviewComponent } from './modules-overview.component';

describe('ModulesOverviewComponent', () => {
  let component: ModulesOverviewComponent;
  let fixture: ComponentFixture<ModulesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
