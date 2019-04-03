import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RaceCategory } from '../../interface/race-category';
import { ResultsService } from '../results.service';

@Component({
  selector: '[app-results-row]',
  templateUrl: './results-row.component.html',
  styleUrls: ['./results-row.component.css']
})
export class ResultsRowComponent implements OnInit {
  @Input()
  raceCategory: RaceCategory;
  @Output()
  refresh: EventEmitter<void>;
  @Output()
  refreshWithData: EventEmitter<RaceCategory>;
  cloneRace: RaceCategory;
  
  constructor(private raceService: ResultsService) {
    this.raceCategory = { id: null , type: '', subType: ''};
    this.refresh = new EventEmitter();
    this.refreshWithData = new EventEmitter();

  }

  ngOnInit() {
  }

}