import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Horse } from '../interface/horse';
import { HorseService } from '../horse.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-horse',
  templateUrl: './add-horse.component.html',
  styleUrls: ['./add-horse.component.css']
})
export class AddHorseComponent implements OnInit {

  horse: Horse;
  isNameInvalid: boolean;
  isBreedInvalid: boolean;
  errors: any;
  token: string;

  constructor(private horseService: HorseService, private dataService: DataService, private router: Router) {
    //DataService includes the csrf token and the endpoint for the url
    //HorseService manages the get query, adding new datas, modifying and removing them.
    this.horse = {
      name: '',
      breed: '',
      yearOfBirth: null,
      startNumberValues: null,
    };
    this.isNameInvalid = false;
    this.isBreedInvalid = false;
    this.errors = {};

  }

  ngOnInit() {
  }
  //checks the input if were correct, then with the addHorse method sends a post
  add(): void {
    this.checkName();
    this.checkBreed();
    if (!this.isNameInvalid && !this.errors.breed && !this.errors.year) {
      this.horseService.addHorse(this.horse).then(() => {
        this.router.navigate(['/horses']);
      });
    }
  }

  checkName(): void {
    this.isNameInvalid = (this.horse.name === '');
  }

  checkBreed(): void {
    this.isBreedInvalid = (this.horse.breed === '');
  }

  isYearInvalid(): void {
    this.errors.yearInvalid = (this.horse.yearOfBirth == null);
  }

  isNumberInvalid(): boolean {
    return this.horse.startNumberValues !== null && ! /^\d*$/.test(this.horse.startNumberValues.toString());
  }

}
