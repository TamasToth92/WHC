import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { RaceResults } from '../../interface/race-results';
import { RaceResultsService } from '../race-results.service';

@Component({
  selector: '[app-race-results]',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.css']
})
export class RaceResultsComponent implements OnInit {
@Input()
raceResults: RaceResults[];
@Output()
refresh: EventEmitter<void>;
@Output()
refreshWithData: EventEmitter<RaceResults[]>;
cloneResult: RaceResults;
editMode: boolean;
  isLoading: boolean;
  isSaving: boolean;
  fieldErrors: string[];

  constructor(private raceResultsService: RaceResultsService,private modalService: NgbModal) {
    this.raceResults = [];
    this.isLoading = true;
    this.refresh = new EventEmitter();
    this.refreshWithData = new EventEmitter();
   }

  ngOnInit() {
    this.refreshList();
  }

  //on edit mode clones the data
  setEditMode(em: boolean) {
    this.editMode = em;
    if(em) {
      this.cloneResult = JSON.parse(JSON.stringify(this.raceResults));
    }
  }

  //if inputs were correct sends put request with raceResultsService
  saveRaceResult(): void {
    this.isSaving = true;
    this.raceResultsService.modifyResult(this.cloneResult)
    .then(data => {
      this.setEditMode(false);
      this.refreshWithData.emit(data);
    })
    .catch(errorInfos => {
      if(errorInfos) {
        this.fieldErrors = errorInfos;
      } else {
        this.refresh.emit();
      }
    })
    .finally(() => {
      this.isSaving = false;
    });
  }
  
  //refreshes the table
  refreshList(newRaceResults?: RaceResults[]) {
    this.isLoading = true;
    if (newRaceResults) {
      this.raceResults = newRaceResults;
      this.isLoading = false
    } else {
      this.raceResultsService.getRaceResults().then(raceResults => {
        this.raceResults = raceResults;
        this.isLoading = false
      });
    }
  }
  
}
