import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race-category',
  templateUrl: './race-category.component.html',
  styleUrls: ['./race-category.component.css']
})
export class RaceCategoryComponent implements OnInit {

  constructor() {

 }

  ngOnInit() {
    this.refreshList();
    //TODO
  }
  refreshList(){

  }


}
