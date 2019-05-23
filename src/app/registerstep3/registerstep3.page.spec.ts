import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerstep3Page } from './registerstep3.page';

describe('Registerstep3Page', () => {
  let component: Registerstep3Page;
  let fixture: ComponentFixture<Registerstep3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registerstep3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registerstep3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
