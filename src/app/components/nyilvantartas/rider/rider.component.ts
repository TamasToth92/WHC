import { Component, OnInit } from '@angular/core';
import { Rider } from './rider';
import { identifierModuleUrl } from '@angular/compiler';
import { RiderService } from './rider.service';

@Component({
  selector: '[app-rider]',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {

  //temporary dummy data
  rider_1: Rider = {
    id: 1,
    name: 'Próba János',
    yearOfBirth: 1969,
    status: 'ACTIVE', //ENUM?
    phoneNumber: '+36907634598',
    email: 'proba@janos.hu',
    nameOfCoach: 'Kócs Elemér',
    ranchName: 'RancsFarm',
  }
  rider_2: Rider = {
    id: 2,
    name: 'Próba Juli',
    yearOfBirth: 1969,
    status: 'ACTIVE', //ENUM?
    phoneNumber: '+36907634598',
    email: 'proba@janos.hu',
    nameOfCoach: 'Kócs Elemér',
    ranchName: 'RancsFarm',
  }

  isLoading: boolean;
  riders: Rider[];

  constructor(private riderService: RiderService) {
    //uses the RiderService for calling the get, post, put requests
    this.riders = [];
    this.isLoading = true;
  }


  ngOnInit() {
    this.refreshList();
  }

  //refershes the table with new data by calling the RiderService's get request
  refreshList(newRiders?: Rider[]) {
    this.isLoading = true;
    if (newRiders) {
      this.riders = newRiders;
      this.isLoading = false;
    } else {
      this.riderService.getRiders().then(riders => {
        this.riders = riders;
        this.isLoading = false;
      });
    }
  }

}
