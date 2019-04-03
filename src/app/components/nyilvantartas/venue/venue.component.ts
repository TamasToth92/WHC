import { Component, OnInit } from '@angular/core';
import { VenueService } from './venue.service';
import { Venue } from '../Interfaces/venue';
import { VenueNewModalComponent } from './venue-new-modal/venue-new-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: '[app-venue]',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})

export class VenueComponent implements OnInit {
  venue_1: Venue = {
    id: 6667,
    name: 'Próba helyszín',
    dateOfRace: 20190201,
    entryFee: 1500,
    startFee: 2000,
    boxFee: 4000,
    paddockFee: 4500,
  }
  isLoading: boolean;
  isSaving: boolean;
  venues: Venue[];



  constructor(private venueService: VenueService, private modalService: NgbModal) {

    this.venues = [];
    this.isLoading = true;
  }

  ngOnInit() {
    this.refreshList();
  }

  //opens up the modal window
  addVenue() {
    const modalRef = this.modalService.open(VenueNewModalComponent);
  }

  //refereshing table with VenueService's getVenues method
  refreshList(newVenue?: Venue[]) {
    this.isLoading = true;
    if (newVenue) {
      this.venues = newVenue;
      this.isLoading = false
    } else {
      this.venueService.getVenues().then(venues => {
        this.venues = venues;
        this.isLoading = false
      });
    }
  }

  refreshListModal(): boolean {
    let rtn = false;
    this.isLoading = true;
    this.venueService.getVenues()
      .then(venues => {
        this.venues = venues;
        this.isLoading = false;
        rtn = true;
      });
    return rtn;
  }
}
