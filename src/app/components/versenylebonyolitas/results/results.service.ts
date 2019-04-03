import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Race } from '../interface/race';
import { DataService } from '../../../data.service'
import { RaceCategory } from '../../nyilvantartas/Interfaces/race-category';


@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  readonly endPoint = this.dataService.endPoint + "venue/a";
  races: Race[];
  raceCategories: RaceCategory[];
  constructor(private http: HttpClient, private dataService: DataService) {

  }

  //get request for races
  getRaces(): Promise<Race> {
    return new Promise<Race>((resolve,reject) => {
      this.http.get(this.endPoint, {withCredentials: true}).toPromise()
      .then(response => {
        resolve((response as any));
      }).catch(reject);
    });
  }
  
  //get request for the raceCategories
  getRaceCategories(): Promise<RaceCategory[]> {
    return new Promise<RaceCategory[]>((resolve,reject) => {
      this.http.get(this.endPoint, {withCredentials: true}).toPromise()
      .then(response => {
        resolve((response as any).raceCategories);
      }).catch(reject);
    });
  }
}

