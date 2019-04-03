import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-horse',
  templateUrl: './delete-horse.component.html',
  styleUrls: ['./delete-horse.component.css']
})
export class DeleteHorseComponent implements OnInit {

  @Input()
  name: string;

  constructor(public activeModal: NgbActiveModal) { 
    //TODO
  }

  ngOnInit() {
  }

}
