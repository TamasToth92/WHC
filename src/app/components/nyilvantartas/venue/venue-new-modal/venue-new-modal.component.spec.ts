import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueNewModalComponent } from './venue-new-modal.component';

describe('VenueNewModalComponent', () => {
  let component: VenueNewModalComponent;
  let fixture: ComponentFixture<VenueNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
