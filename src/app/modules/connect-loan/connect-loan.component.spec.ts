import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectLoanComponent } from './connect-loan.component';

describe('ConnectLoanComponent', () => {
  let component: ConnectLoanComponent;
  let fixture: ComponentFixture<ConnectLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
