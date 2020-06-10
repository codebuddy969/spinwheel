import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraPaymentSliderComponent } from './extra-payment-slider.component';

describe('ExtraPaymentSliderComponent', () => {
  let component: ExtraPaymentSliderComponent;
  let fixture: ComponentFixture<ExtraPaymentSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraPaymentSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraPaymentSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
