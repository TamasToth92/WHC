import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsRowComponent } from './results-row.component';

describe('ResultsRowComponent', () => {
  let component: ResultsRowComponent;
  let fixture: ComponentFixture<ResultsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
