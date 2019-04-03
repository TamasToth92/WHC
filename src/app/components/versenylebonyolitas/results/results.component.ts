import { Component, OnInit } from '@angular/core';

import { Race } from '../interface/race';
import { ResultsService } from './results.service';
import { RaceCategory } from '../interface/race-category'

@Component({
  selector: '[app-results]',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {


  races: Race;
  isLoading: boolean;

  constructor(private resultsService: ResultsService) {
    this.isLoading = true;
    /*this.races = {
      name : "",
      dateOfRace: "",
      raceCategories: []
    };
    */
    this.races = {
      id: null,
      name: '',
      dateOfRace: '',
      entryFee: null,
      startFee: null,
      boxFee: null,
      paddockFee: null,
      raceCategories: [
        { id: 1, type: 'Trail', subType: 'Trail novice' },
        { id: 2, type: 'Trail', subType: 'Trail youth' },
        { id: 3, type: 'Trail', subType: 'Trail amateur' },
        { id: 4, type: 'Trail', subType: 'Trail novice amateur' },
        { id: 5, type: 'Trail', subType: 'Trail open' },
      ],
      isActive: '',
      isInPestcountry: '',
      active: false
    }
  }


  ngOnInit() {
    this.refreshList();
    //this.refreshRaceCategoriesList();
  }

  //refreshes the race
  refreshList(newRace?: Race) {
    this.isLoading = true;
    if (newRace) {
      this.races = newRace;
      this.isLoading = false;
    } else {
      this.resultsService.getRaces().then(races => {
        this.races = races;
        this.isLoading = false;
      });
    }
  }

}
