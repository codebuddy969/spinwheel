import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteChampsComponent } from './invite-champs.component';

describe('InviteChampsComponent', () => {
  let component: InviteChampsComponent;
  let fixture: ComponentFixture<InviteChampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteChampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteChampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
