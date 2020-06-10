import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAmountChartComponent } from './pay-amount-chart.component';

describe('PayAmountChartComponent', () => {
  let component: PayAmountChartComponent;
  let fixture: ComponentFixture<PayAmountChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayAmountChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayAmountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
