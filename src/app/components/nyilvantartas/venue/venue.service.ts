import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Venue } from '../Interfaces/venue';
import { DataService } from 'src/app/data.service';

@Injectable({
  providedIn: 'root'
})

export class VenueService {
  readonly endPoint = this.dataService.endPoint + "venue";
  venues: Venue[];

  constructor(private http: HttpClient, private dataService: DataService) {

  }

  //post request
  addNewVenue(v: Venue): Promise<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRF-TOKEN': localStorage.getItem("token")
      }),
      withCredentials: true
    };
    return this.http.post(this.dataService.endPoint + "venue", v, httpOptions).toPromise();
  }

  //get request
  getVenues(): Promise<Venue[]> {
    return new Promise<Venue[]>((resolve, reject) => {
      this.http.get(this.endPoint, { withCredentials: true }).toPromise()
        .then(response => {
          resolve((response as any));
        }).catch(reject);
    });
  }
}
