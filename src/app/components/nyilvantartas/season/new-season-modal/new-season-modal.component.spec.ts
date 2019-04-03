import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSeasonModalComponent } from './new-season-modal.component';

describe('NewSeasonModalComponent', () => {
  let component: NewSeasonModalComponent;
  let fixture: ComponentFixture<NewSeasonModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSeasonModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSeasonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
