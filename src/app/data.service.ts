import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
readonly endPoint = 'https://vast-plateau-75986.herokuapp.com/';
//readonly  endPoint =  'http://192.168.1.216:5000/';
  constructor(private http: HttpClient) {}

  //get request for saving the token for authentcation 
  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.get(this.endPoint + "csrf", {withCredentials: true}).toPromise()
        .then(response => {
          localStorage.setItem( "token", (response as any).token );
          resolve((response as any).token);
        }).catch(reject);
    })
  }

 

}
