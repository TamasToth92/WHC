import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Horse } from '../../horse/interface/horse';
import { HorseService } from '../horse.service';
import { HorseComponent } from '../horse.component';

@Component({
  selector: 'app-add-horse-modal',
  templateUrl: './add-horse-modal.component.html',
  styleUrls: ['./add-horse-modal.component.css']
})
export class AddHorseModalComponent implements OnInit {

  constructor(private modalService: NgbModal, private horseService: HorseService, private horseComponent: HorseComponent) { }

  closeResult: string;
  horse: Horse;
  isNameInvalid: boolean;
  isBreedInvalid: boolean;
  isYearInvalid: boolean;
  readyToSend: boolean;

  ngOnInit() {
    this.horse = {
      name: '',
      breed: '',
      yearOfBirth: null
    };
    this.isNameInvalid = false;
    this.isBreedInvalid = false;
    this.isYearInvalid = false;
    this.readyToSend = false;
  }

  //sending post request with addHorse method then refershing the table with the new datas, then closing the modal
  addNewHorse() {
    if (this.readyToSend = true) {
      this.horseService.addHorse(this.horse)
        .then(response => {
          this.horseComponent.refreshList();
          this.horse = {
            name: '',
            breed: '',
            yearOfBirth: null
          };
          this.modalService.dismissAll(ModalDismissReasons.ESC);
        });
    } else {
      this.validateInputs();
    }
  }


  open(content) {

    this.isNameInvalid = false;
    this.isBreedInvalid = false;
    this.isYearInvalid = false;

    this.modalService.open(content, { ariaLabelledBy: 'app-add-horse-modal' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  //checking if the inputs were given in the correct form
  validateInputs() {
    this.checkName();
    this.checkBreed();
    this.checkYear();
    if (this.isNameInvalid == false && this.isBreedInvalid == false && this.isYearInvalid == false) {
      this.readyToSend = true;
    }
    this.readyToSend = false;
  }

  checkName() {
    this.isNameInvalid = (this.horse.name === '');

  };
  checkBreed() {
    this.isBreedInvalid = (this.horse.breed === '');

  };
  checkYear() {
    if (this.horse.yearOfBirth === null) {
      this.isYearInvalid = true;
    } else {
      this.isYearInvalid = false;
    }
  }
}
