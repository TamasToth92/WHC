import { Injectable } from '@angular/core';
import { Number } from './number';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Injectable({
    providedIn: 'root'
})
export class StartNumberService {

    readonly endPoint: string;
    numbers: Number[];
    constructor(private http: HttpClient, private dataService: DataService) {
        this.numbers = []
        this.endPoint = this.dataService.endPoint + "startnumber";
    };

    //get request
    getStartNumbers(): Promise<Number[]> {
        return new Promise<Number[]>((resolve, reject) => {
            this.http.get(this.endPoint, { withCredentials: true }).toPromise()
                .then(response => {
                    resolve((response as any));
                }).catch(reject);
        });
    }

    //post request
    addStartNumber(n: Number): Promise<object> {
        const httpOptions = {
            headers: new HttpHeaders({
                'X-CSRF-TOKEN': localStorage.getItem("token")
            }),
            withCredentials: true
        };
        return this.http.post(this.endPoint, n, httpOptions).toPromise();
    }


    //put request
    modifyStartNumber(n: Number): Promise<Number[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'X-CSRF-TOKEN': localStorage.getItem("token")
            }),
            withCredentials: true
        };
        return new Promise((resolve, reject) => {
            this.http.put(this.endPoint, n, httpOptions)
                .toPromise().then(data => {
                    if ((data as any).success) {
                        resolve((data as any).number);
                    } else {
                        if (data['error-code'] === 'missing-params') {
                            reject(data['error-infos']);
                        } else {
                            reject();
                        }
                    }
                }).catch(() => { reject(); });
        });
    }

}
