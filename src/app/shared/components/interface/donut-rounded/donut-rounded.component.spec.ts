import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutRoundedComponent } from './donut-rounded.component';

describe('DonutRoundedComponent', () => {
  let component: DonutRoundedComponent;
  let fixture: ComponentFixture<DonutRoundedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutRoundedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
