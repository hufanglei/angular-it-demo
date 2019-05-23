import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressaddPage } from './addressadd.page';

describe('AddressaddPage', () => {
  let component: AddressaddPage;
  let fixture: ComponentFixture<AddressaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
