import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinfoPage } from './pinfo.page';

describe('PinfoPage', () => {
  let component: PinfoPage;
  let fixture: ComponentFixture<PinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
