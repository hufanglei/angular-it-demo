import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresseditPage } from './addressedit.page';

describe('AddresseditPage', () => {
  let component: AddresseditPage;
  let fixture: ComponentFixture<AddresseditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresseditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresseditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
