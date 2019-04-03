import { Component, OnInit } from '@angular/core';
import { Season } from '../Interfaces/season';
import { Venue } from '../Interfaces/venue';
import { SeasonService } from './season.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewSeasonModalComponent } from './new-season-modal/new-season-modal.component';


@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  season: Season[];
  season_1: Season = {
    year: null,
    registrationFee: null,
    startNumbers: null,
  }
  isLoading: boolean;
  isSaving: boolean;
  venues: Venue[];
  seasons: Season[];

  constructor(private seasonService: SeasonService, private modalService: NgbModal) {
    this.venues = [];
    this.seasons = [];
    this.isLoading = true;
  }
  ngOnInit() {
    this.refreshList();
  }

  refreshList(newSeason?: Season[]) {
    this.isLoading = true;
    if (newSeason) {
      this.seasons = newSeason;
      this.isLoading = false
    } else {
      this.seasonService.getSeasons().then(seasons => {
        this.seasons = seasons;
        this.isLoading = false
      });
    }
  }
  addSeason() {
    const modalRef = this.modalService.open(NewSeasonModalComponent);
  }
}
