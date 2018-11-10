import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtestcasesComponent } from './viewtestcases.component';

describe('ViewtestcasesComponent', () => {
  let component: ViewtestcasesComponent;
  let fixture: ComponentFixture<ViewtestcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtestcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtestcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
