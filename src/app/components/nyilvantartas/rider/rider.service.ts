import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rider } from './rider';
import { DataService } from 'src/app/data.service';

@Injectable({
    providedIn: 'root'
})
export class RiderService {

    readonly endPoint = this.dataService.endPoint + "rider";
    riders: Rider[];
    constructor(private http: HttpClient, private dataService: DataService) {

    }

    //get request
    getRiders(): Promise<Rider[]> {
        return new Promise<Rider[]>((resolve, reject) => {
            this.http.get(this.endPoint, { withCredentials: true }).toPromise()
                .then(response => {
                    resolve((response as any));
                }).catch(reject);
        });
    }

    //post request
    addRider(r: Rider): Promise<object> {
        const httpOptions = {
            headers: new HttpHeaders({
                'X-CSRF-TOKEN': localStorage.getItem("token")
            }),
            withCredentials: true
        };
        return this.http.post(this.endPoint, r, httpOptions).toPromise();

    //return this.http.post(this.endPoint, JSON.stringify({ rider : r }), { withCredentials: true }).toPromise();
    }


    //put request
    modifyRider(r: Rider): Promise<Rider[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'X-CSRF-TOKEN': localStorage.getItem("token")
            }),
            withCredentials: true
        };
        return new Promise((resolve, reject) => {
            this.http.put(this.endPoint, r, httpOptions)
                .toPromise().then(data => {
                    if ((data as any).success) {
                        resolve((data as any).rider);
                    } else {
                        if (data['error-code'] === 'missing-params') {
                            // valamit rosszul írt be a felhasználó
                            reject(data['error-infos']);
                        } else {
                            // valami nagyobb baj van
                            reject();
                        }
                    }
                }).catch(() => { reject(); });
        });
    }

}


