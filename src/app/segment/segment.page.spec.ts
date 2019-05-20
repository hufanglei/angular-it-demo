import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentPage } from './segment.page';

describe('SegmentPage', () => {
  let component: SegmentPage;
  let fixture: ComponentFixture<SegmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
