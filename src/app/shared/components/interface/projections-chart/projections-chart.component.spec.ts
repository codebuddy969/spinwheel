import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionsChartComponent } from './projections-chart.component';

describe('ProjectionsChartComponent', () => {
  let component: ProjectionsChartComponent;
  let fixture: ComponentFixture<ProjectionsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
