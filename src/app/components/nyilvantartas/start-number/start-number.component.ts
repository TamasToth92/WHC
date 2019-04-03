import { Component, OnInit } from '@angular/core';
import { Number } from './number';
import { StartNumberService } from './start-number.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-number',
  templateUrl: './start-number.component.html',
  styleUrls: ['./start-number.component.css']
})
export class StartNumberComponent implements OnInit {

  isLoading: boolean;
  numbers: Number[];

  constructor(private numberService: StartNumberService, private router: Router) {
    this.numbers = [];
    this.isLoading = true;
  }

  ngOnInit() {
    this.refreshList();
  }

  //refreshes the table with getStartNumbers method using the StartNumberService
  refreshList(newNumbers?: Number[]) {
    this.isLoading = true;
    if (newNumbers) {
      this.numbers = newNumbers;
      this.isLoading = false;
    } else {
      this.numberService.getStartNumbers().then(numbers => {
        this.numbers = numbers;
        this.isLoading = false;
      });
    }
  }

}
