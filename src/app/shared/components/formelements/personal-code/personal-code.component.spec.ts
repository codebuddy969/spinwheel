import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCodeComponent } from './personal-code.component';

describe('PersonalCodeComponent', () => {
  let component: PersonalCodeComponent;
  let fixture: ComponentFixture<PersonalCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
