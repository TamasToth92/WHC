import { Component, OnInit } from '@angular/core';
import { Venue } from '../../Interfaces/venue';
import { VenueService } from '../venue.service';
import { Router } from '@angular/router';
import { NgbActiveModal, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[app-venue-new-modal]',
  templateUrl: './venue-new-modal.component.html',
  styleUrls: ['./venue-new-modal.component.css'],
})


export class VenueNewModalComponent implements OnInit {
  dateOfRace = new Date().getTime();
  venue: Venue;
  fieldErrors: string[];
  isVenueNameInvalid: boolean;
  isSaving: boolean;
  cloneVenue: Venue;
  model: NgbDateStruct;
  date: { year: number, month: number };
  time = { hour: 10, minute: 30 };

  constructor(private venueService: VenueService,
    private router: Router,
    public activeModal: NgbActiveModal,
    private calendar: NgbCalendar,
    private modalService: NgbModal) {
    this.venue = {
      id: undefined,
      name: '',
      entryFee: null,
      startFee: null,
      boxFee: null,
      paddockFee: null,
      dateOfRace: Date.now()
    };
    this.isVenueNameInvalid = false;
    this.fieldErrors = [];
  }

  ngOnInit() {
    this.model = this.calendar.getToday();
  }

  /*
  addNewVenue(): void {
      this.checkName();
      if (!this.isVenueNameInvalid && !this.isEntryFeeInvalid && !this.isStartFeeInvalid) {
        this.venueService.addNewVenue(this.venue)
        .then( response => {
          this.router.navigate(['/venue']);
        });
      }
    }
  */


  isStartFeeInvalid(): boolean {
    return this.venue.startFee !== null && ! /^\d*$/.test(this.venue.startFee.toString());
  }
  isEntryFeeInvalid(): boolean {
    return this.venue.entryFee !== null && ! /^\d*$/.test(this.venue.entryFee.toString());
  }
  isPaddockFeeInvalid(): boolean {
    return this.venue.paddockFee !== null && ! /^\d*$/.test(this.venue.paddockFee.toString());
  }
  isBoxFeeInvalid(): boolean {
    return this.venue.boxFee !== null && ! /^\d*$/.test(this.venue.boxFee.toString());
  }

  checkName(): void {
    this.isVenueNameInvalid = (this.venue.name === '');
  }

  //parsing the inputs to strings, then sends the post request
  saveVenue(): void {
    this.isSaving = true;

    this.venue.boxFee = parseInt(this.venue.boxFee.toString());
    this.venue.entryFee = parseInt(this.venue.entryFee.toString());
    this.venue.paddockFee = parseInt(this.venue.paddockFee.toString());
    this.venue.startFee = parseInt(this.venue.startFee.toString());
    let d = new Date(this.model.year, this.model.month - 1, this.model.day, this.time.hour, this.time.minute);
    this.venue.dateOfRace = d.getTime();

    this.venueService.addNewVenue(JSON.parse(JSON.stringify(this.venue)))
      .catch(errorInfos => {
        if (errorInfos) {
          this.fieldErrors = errorInfos;
        } else {
        }
      }).finally(() => {
        this.isSaving = false;
      })
    this.modalService.dismissAll(ModalDismissReasons.ESC);
  }
}
