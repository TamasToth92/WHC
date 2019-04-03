import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Horse } from '../../horse/interface/horse';
import { HorseService } from '../../horse/horse.service';
import { Rider } from '../../rider/rider';
import { RiderService } from '../../rider/rider.service';
import { FilterPipe } from 'src/app/filter.pipe';
import { Number } from '../number';
import { StartNumberService } from '../start-number.service';

@Component({
  selector: 'app-add-start-number',
  templateUrl: './add-start-number.component.html',
  styleUrls: ['./add-start-number.component.css']
})
export class AddStartNumberComponent implements OnInit {

  horses: Horse[];
  riders: Rider[];
  isHorsesLoading: boolean;
  isRidersLoading: boolean;
  riderSearchToken: string;
  horseSearchToken: string;
  selectedHorse: Horse;
  selectedRider: Rider;
  newStartNumber: Number;
  startNumberInput: number;

  constructor(private router: Router, private horseService: HorseService, private riderService: RiderService, private filterPipe: FilterPipe, private startNumberService: StartNumberService) {
    this.horses = [];
    this.riders = [];
    this.isHorsesLoading = true;
    this.isRidersLoading = true;
    this.riderSearchToken = '';
    this.horseSearchToken = '';
    this.selectedRider = {
      id: null,
      name: '',
      yearOfBirth: null,
      status: '',
      phoneNumber: '',
      email: '',
      nameOfCoach: '',
      ranchName: '',
    };
    this.selectedHorse = {
      id: null,
      name: '',
      yearOfBirth: null,
      breed: '',
    }
    this.startNumberInput = null;
  }

  ngOnInit() {
    this.refreshHorseList();
    this.refreshRiderList();
  }

  setNewStartNumber() {
    this.newStartNumber = {
      startNrValue: this.startNumberInput,
      riderId: this.selectedRider.id,
      riderName: this.selectedRider.name,
      horseId: this.selectedHorse.id,
      horseName: this.selectedHorse.name,
      isActive: true,
      year: 2019,
    }
  }

  setSelectedHorse(h: Horse) {
    this.selectedHorse = h;
  }

  setSelectedRider(r: Rider) {
    this.selectedRider = r;
  }

  //refreshes the horse list
  refreshHorseList(newHorses?: Horse[]) {
    this.isHorsesLoading = true;
    if (newHorses) {
      this.horses = newHorses;
      this.isHorsesLoading = false;
    } else {
      this.horseService.getHorses().then(horses => {
        this.horses = horses;
        this.isHorsesLoading = false;
      });
    }
  }

  //refreshes the rider list
  refreshRiderList(newRiders?: Rider[]) {
    this.isRidersLoading = true;
    if (newRiders) {
      this.riders = newRiders;
      this.isRidersLoading = false;
    } else {
      this.riderService.getRiders().then(riders => {
        this.riders = riders;
        this.isRidersLoading = false;
      });
    }
  }

  //adds a new startnumber if input was correct and sends a post using startNumberService's method
  addNewStartNumber() {
    this.setNewStartNumber();
    if (this.startNumberInput != null) {
      this.startNumberService.addStartNumber(this.newStartNumber);
    }
  }

}
