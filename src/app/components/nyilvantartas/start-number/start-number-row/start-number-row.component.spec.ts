import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNumberRowComponent } from './start-number-row.component';

describe('StartNumberRowComponent', () => {
  let component: StartNumberRowComponent;
  let fixture: ComponentFixture<StartNumberRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartNumberRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNumberRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
