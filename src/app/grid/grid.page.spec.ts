import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPage } from './grid.page';

describe('GridPage', () => {
  let component: GridPage;
  let fixture: ComponentFixture<GridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
