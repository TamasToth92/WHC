import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiderModalComponent } from './add-rider-modal.component';

describe('AddRiderModalComponent', () => {
  let component: AddRiderModalComponent;
  let fixture: ComponentFixture<AddRiderModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRiderModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRiderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
