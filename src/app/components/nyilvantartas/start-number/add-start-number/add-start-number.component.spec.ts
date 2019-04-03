import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStartNumberComponent } from './add-start-number.component';

describe('AddStartNumberComponent', () => {
  let component: AddStartNumberComponent;
  let fixture: ComponentFixture<AddStartNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStartNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStartNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
