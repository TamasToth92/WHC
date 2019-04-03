import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNumberComponent } from './start-number.component';

describe('StartNumberComponent', () => {
  let component: StartNumberComponent;
  let fixture: ComponentFixture<StartNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
