import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import { Number } from '../../nyilvantartas/start-number/number';
import { Season } from '../../nyilvantartas/Interfaces/season';

@Component({
  selector: '[app-registration]',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isLoading: boolean;
  numbers: Number[];
  seasons: Season[];

  constructor(private registrationService: RegistrationService, private router: Router) {
    this.numbers = [];
    this.seasons = [];
    this.isLoading = true;
  }

  ngOnInit() {
    //TODO, the Season, Venue and StartNumber components
    this.refreshList();
    this.refreshSeasonsList();
  }
  //refreshes the table
  refreshList(newNumber?: Number[]) {
    this.isLoading = true;
    if (newNumber) {
      this.numbers = newNumber;
      this.isLoading = false
    } else {
      this.registrationService.getStartnumbers().then(numbers => {
        this.numbers = numbers;
        this.isLoading = false
      });
    }
  }
  //refreshes the seasons table
  refreshSeasonsList(newSeason?: Season[]) {
    this.isLoading = true;
    if (newSeason) {
      this.seasons = newSeason;
      this.isLoading = false
    } else {
      this.registrationService.getSeasons().then(seasons => {
        this.seasons = seasons;
        this.isLoading = false
      });
    }
  }


}
