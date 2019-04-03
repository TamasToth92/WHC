import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCategoryComponent } from './race-category.component';

describe('RaceCategoryComponent', () => {
  let component: RaceCategoryComponent;
  let fixture: ComponentFixture<RaceCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
