import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHorseModalComponent } from './add-horse-modal.component';

describe('AddHorseModalComponent', () => {
  let component: AddHorseModalComponent;
  let fixture: ComponentFixture<AddHorseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHorseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHorseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
