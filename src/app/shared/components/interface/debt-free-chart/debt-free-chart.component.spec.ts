import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtFreeChartComponent } from './debt-free-chart.component';

describe('DebtFreeChartComponent', () => {
  let component: DebtFreeChartComponent;
  let fixture: ComponentFixture<DebtFreeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtFreeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtFreeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
