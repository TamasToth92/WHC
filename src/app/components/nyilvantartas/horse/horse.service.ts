import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Horse } from './interface/horse';
import { DataService } from 'src/app/data.service';

@Injectable({
  providedIn: 'root'
})
export class HorseService {

  readonly endPoint = this.dataService.endPoint + "horse";

  constructor(private http: HttpClient, private dataService: DataService) {
  }

  //get request
  getHorses(): Promise<Horse[]> {
    return new Promise<Horse[]>((resolve, reject) => {
      this.http.get(this.endPoint, { withCredentials: true }).toPromise()
        .then(response => {
          resolve((response as any));
        }).catch(reject);
    });
  }

  //post request with new data
  addHorse(h: Horse): Promise<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRF-TOKEN': localStorage.getItem("token")
      }),
      withCredentials: true
    };
    return this.http.post(this.dataService.endPoint + "horse", h, httpOptions).toPromise();
  }


  //put request
  modifyHorse(h: Horse): Promise<Horse[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRF-TOKEN': localStorage.getItem("token")
      }),
      withCredentials: true
    };

    return new Promise((resolve, reject) => {
      this.http.put(this.dataService.endPoint + "horse", h, httpOptions)
        .toPromise().then(data => {
          if ((data as any).success) {
            resolve((data as any).horses);
          } else {
            if (data['error-code'] === 'not-valid-horse-data') {
              reject(data['error-infos']);
            } else {
              reject();
            }
          }
        }).catch(() => { reject(); });
    });
  }

  //delete request
  removeHorse(id: number): Promise<object> {
    return this.http.delete(this.dataService.endPoint, {
      params: { id: id.toString() },
      withCredentials: true,
    }).toPromise();
  }


}
