import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RaceResults } from '../interface/race-results';
import { DataService } from 'src/app/data.service';

@Injectable({
  providedIn: 'root'
})
export class RaceResultsService {

  readonly endPoint = this.dataService.endPoint + "/{venueid}/round?raceCategory={raceCategoryId}";
  raceResults: RaceResults[];

  constructor(private http: HttpClient, private dataService: DataService) {

  }

  //get request
  getRaceResults(): Promise<RaceResults[]> {
    return new Promise<RaceResults[]>((resolve, reject) => {
      this.http.get(this.endPoint, { withCredentials: true }).toPromise()
        .then(response => {
          resolve((response as any));
        }).catch(reject);
    });
  }

  //put request with the modified data
  modifyResult(r: RaceResults): Promise<RaceResults[]> {
    return new Promise((resolve, reject) => {
      this.http.put(this.endPoint, JSON.stringify({ round: r }), {
        params: { id: r.id.toString() },
        withCredentials: true,
      }).toPromise().then(data => {
        if ((data as any).success) {
          resolve((data as any).round);
        } else {
          if (data['error-code'] === 'missing-params') {
            // user's inputs were in the wrong form
            reject(data['error-infos']);
          } else {
            // other issues
            reject();
          }
        }
      }).catch(() => { reject(); });
    });
  }
}
