import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSourceComponent } from './point-source.component';

describe('PointSourceComponent', () => {
  let component: PointSourceComponent;
  let fixture: ComponentFixture<PointSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
