import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistPage } from './productlist.page';

describe('ProductlistPage', () => {
  let component: ProductlistPage;
  let fixture: ComponentFixture<ProductlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
