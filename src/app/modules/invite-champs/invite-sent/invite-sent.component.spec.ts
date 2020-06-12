import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteSentComponent } from './invite-sent.component';

describe('InviteSentComponent', () => {
  let component: InviteSentComponent;
  let fixture: ComponentFixture<InviteSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
