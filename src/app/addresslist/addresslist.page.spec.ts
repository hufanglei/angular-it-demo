import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresslistPage } from './addresslist.page';

describe('AddresslistPage', () => {
  let component: AddresslistPage;
  let fixture: ComponentFixture<AddresslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
