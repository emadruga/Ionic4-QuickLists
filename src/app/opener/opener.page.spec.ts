import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenerPage } from './opener.page';

describe('OpenerPage', () => {
  let component: OpenerPage;
  let fixture: ComponentFixture<OpenerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
