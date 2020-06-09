import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDonutComponent } from './progress-donut.component';

describe('ProgressDonutComponent', () => {
  let component: ProgressDonutComponent;
  let fixture: ComponentFixture<ProgressDonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressDonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
