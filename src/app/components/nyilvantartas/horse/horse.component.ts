import { Component, OnInit } from '@angular/core';
import { Horse } from './interface/horse';
import { HorseService } from './horse.service';



@Component({
  selector: '[app-horse]',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.css']
})
export class HorseComponent implements OnInit {

  horses: Horse[];
  isLoading: boolean;

  constructor(private horseService: HorseService) {
    this.horses = [];
    this.isLoading = true;
}

  ngOnInit() {
    this.refreshList();
  }

  //reloading the table with get request
  refreshList() : boolean {
    let rtn = false;
    this.isLoading = true;
    this.horseService.getHorses()
      .then(horses => {
        this.horses = horses;
        this.isLoading = false;
        rtn = true;
      });
    return rtn;
  }
}
