import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceResultsRowComponent } from './race-results-row.component';

describe('RaceResultsRowComponent', () => {
  let component: RaceResultsRowComponent;
  let fixture: ComponentFixture<RaceResultsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceResultsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceResultsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
