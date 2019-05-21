import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsinfoPage } from './newsinfo.page';

describe('NewsinfoPage', () => {
  let component: NewsinfoPage;
  let fixture: ComponentFixture<NewsinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
