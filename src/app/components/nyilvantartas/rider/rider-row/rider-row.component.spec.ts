import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderRowComponent } from './rider-row.component';

describe('RiderRowComponent', () => {
  let component: RiderRowComponent;
  let fixture: ComponentFixture<RiderRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
