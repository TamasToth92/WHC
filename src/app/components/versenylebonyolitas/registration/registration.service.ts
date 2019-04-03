import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Number } from '../../nyilvantartas/start-number/number'
import { Season } from '../../nyilvantartas/Interfaces/season';
import { DataService } from 'src/app/data.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  readonly endPoint = this.dataService.endPoint + "startnumber";
readonly seasonsEndPoint =  this.dataService.endPoint + 'seasons';
  numbers: Number[];
  seasons: Season[];
  constructor(private http: HttpClient, private dataService: DataService) {
    this.numbers = []
    this.seasons = []
   };

  
   getStartnumbers(): Promise<Number[]> {
    return new Promise<Number[]>((resolve,reject) => {
      this.http.get(this.endPoint, {withCredentials: true}).toPromise()
      .then(response => {
        resolve((response as any));
      }).catch(reject);
    });
  }

  
  getSeasons(): Promise<Season[]> {
    return new Promise<Season[]>((resolve,reject) => {
      this.http.get(this.seasonsEndPoint, {withCredentials: true}).toPromise()
      .then(response => {
        resolve((response as any));
      }).catch(reject);
    });
  }
}
