import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GesturesPage } from './gestures.page';

describe('GesturesPage', () => {
  let component: GesturesPage;
  let fixture: ComponentFixture<GesturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesturesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
