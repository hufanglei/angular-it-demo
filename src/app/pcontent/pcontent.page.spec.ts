import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcontentPage } from './pcontent.page';

describe('PcontentPage', () => {
  let component: PcontentPage;
  let fixture: ComponentFixture<PcontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
