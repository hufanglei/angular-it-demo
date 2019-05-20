import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimePage } from './datetime.page';

describe('DatetimePage', () => {
  let component: DatetimePage;
  let fixture: ComponentFixture<DatetimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
