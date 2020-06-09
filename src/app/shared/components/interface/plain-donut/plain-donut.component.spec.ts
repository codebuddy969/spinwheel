import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainDonutComponent } from './plain-donut.component';

describe('PlainDonutComponent', () => {
  let component: PlainDonutComponent;
  let fixture: ComponentFixture<PlainDonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainDonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
