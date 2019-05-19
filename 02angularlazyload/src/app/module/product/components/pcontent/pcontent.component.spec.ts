import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcontentComponent } from './pcontent.component';

describe('PcontentComponent', () => {
  let component: PcontentComponent;
  let fixture: ComponentFixture<PcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
