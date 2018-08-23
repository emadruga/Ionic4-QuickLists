import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApplicantPage } from './new-applicant.page';

describe('NewApplicantPage', () => {
  let component: NewApplicantPage;
  let fixture: ComponentFixture<NewApplicantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewApplicantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewApplicantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
