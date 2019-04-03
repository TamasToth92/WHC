import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { reject } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;
  user: {
    username: string,
    password: string,
  };
  constructor(private dataService: DataService, private http: HttpClient, private router: Router) {
    this.user = {
      username: 'admin',
      password: 'admin',
    }
  }
  ngOnInit() {
    //fills the forms temporarily during development
    this.user.username = 'admin';
    this.user.password = 'admin';
  }
  username: string;
  password: string;
  isNameEmpty: boolean;
  isPasswordEmpty: boolean;

  //checks if the inputs were in the correct form, then login method sends a post to
  //have access to the administrative pages
  validateLoginForm(): void {
    this.checkName();
    this.checkPassword();
    if (this.isNameEmpty == false && this.isPasswordEmpty == false) {
      this.login()
        .then(response => {
          this.dataService.getToken();
          this.router.navigate(['index']);
        })
        .catch(reject);
    }
  }

  login(): Promise<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRF-TOKEN': localStorage.getItem("token")
      }),
      withCredentials: true
    };
    let body = new FormData();
    body.append('username', this.user.username);
    body.append('password', this.user.password);
    return this.http.post(this.dataService.endPoint + "login", body, httpOptions).toPromise();
  };



  checkName(): void {
    if (this.username === '') {
      this.isNameEmpty = true;
    } else {
      this.isNameEmpty = false;
    }
  }
  checkPassword(): void {
    if (this.password === '') {
      this.isPasswordEmpty = true;
    } else {
      this.isPasswordEmpty = false;
    }
  }
}

