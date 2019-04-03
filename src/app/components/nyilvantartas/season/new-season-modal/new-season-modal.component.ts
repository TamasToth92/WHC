import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Venue } from '../../Interfaces/venue';
import { Season } from '../../Interfaces/season';
import { SeasonService } from '../season.service';




@Component({
  selector: 'app-new-season-modal',
  templateUrl: './new-season-modal.component.html',
  styleUrls: ['./new-season-modal.component.css']
})
export class NewSeasonModalComponent implements OnInit {
  registrationFee: number;
  venue: Venue;
  isSaving: boolean;
  cloneSeason: Season;

  constructor(private seasonService: SeasonService, private router: Router, public activeModal: NgbActiveModal) {
    //TODO, new seson modal
  }

  ngOnInit() {
  }

}
