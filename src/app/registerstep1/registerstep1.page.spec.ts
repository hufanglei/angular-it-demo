import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerstep1Page } from './registerstep1.page';

describe('Registerstep1Page', () => {
  let component: Registerstep1Page;
  let fixture: ComponentFixture<Registerstep1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registerstep1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registerstep1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
