import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Season } from '../Interfaces/season';
import { DataService } from 'src/app/data.service';

@Injectable({
  providedIn: 'root'
})

export class SeasonService {
  readonly endPoint = this.dataService.endPoint + 'seasons';

  seasons: Season[];

  constructor(private http: HttpClient, private dataService: DataService) {
    this.seasons = []
  }

  addNewSeason(s: Season): Promise<object> {
    return this.http.post(this.endPoint, JSON.stringify({ season: s }), { withCredentials: true }).toPromise();
  }

  //TODO, fixing parse error
  getSeasons(): Promise<Season[]> {
    return new Promise<Season[]>((resolve, reject) => {
      this.http.get(this.endPoint, { withCredentials: true }).toPromise()
        .then(response => {
          resolve((response as any));
        }).catch(reject);
    });
  }
}
