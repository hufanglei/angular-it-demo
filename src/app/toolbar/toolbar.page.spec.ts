import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarPage } from './toolbar.page';

describe('ToolbarPage', () => {
  let component: ToolbarPage;
  let fixture: ComponentFixture<ToolbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
