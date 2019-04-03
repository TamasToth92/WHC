import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RiderService } from '../rider.service';
import { Rider } from '../rider';
import { RiderComponent } from '../rider.component';

@Component({
  selector: 'app-add-rider-modal',
  templateUrl: './add-rider-modal.component.html',
  styleUrls: ['./add-rider-modal.component.css']
})
export class AddRiderModalComponent implements OnInit {

  constructor(private modalService: NgbModal, private riderService: RiderService, private riderComponent: RiderComponent) { }

  closeResult: string;
  rider: Rider;
  isNameInvalid: boolean;
  isYearInvalid: boolean;
  isStatusInvalid: boolean;
  isPhoneNumberInvalid: boolean;
  isEmailInvalid: boolean;
  isCoachNameInvalid: boolean;
  isRanchNameInvalid: boolean;
  readyToSend: boolean;

  ngOnInit() {
    this.rider = {
      name: '',
      yearOfBirth: null,
      status: '',
      phoneNumber: '',
      email: '',
      nameOfCoach: '',
      ranchName: '',
    };
    this.isNameInvalid = false;
    this.isYearInvalid = false;
    this.isStatusInvalid = false;
    this.isPhoneNumberInvalid = false;
    this.isEmailInvalid = false;
    this.isCoachNameInvalid = false;
    this.isRanchNameInvalid = false;
    this.readyToSend = false;
  }

  //adds the new data to the table if the inputs were correct, refreshes the table and closes the modal
  addNewRider() {
    if (this.readyToSend = true) {
      this.riderService.addRider(this.rider)
        .then(response => {
          this.riderComponent.refreshList();
          this.rider = {
            name: '',
            yearOfBirth: null,
            status: '',
            phoneNumber: '',
            email: '',
            nameOfCoach: '',
            ranchName: '',
          };
          this.modalService.dismissAll(ModalDismissReasons.ESC);
        });
    } else {
      this.validateInputs();
    }
  }

  open(content) {
    this.rider = {
      name: '',
      yearOfBirth: null,
      status: '',
      phoneNumber: '',
      email: '',
      nameOfCoach: '',
      ranchName: '',
    };
    this.isNameInvalid = false;
    this.isYearInvalid = false;
    this.isStatusInvalid = false;
    this.isPhoneNumberInvalid = false;
    this.isEmailInvalid = false;
    this.isCoachNameInvalid = false;
    this.isRanchNameInvalid = false;
    this.readyToSend = false;

    this.modalService.open(content, { ariaLabelledBy: 'app-add-rider-modal' }).result.then((result) => {
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



  validateInputs() {
    this.checkName();
    this.checkYear();
    this.checkStatus();
    this.checkPhoneNumber();
    this.checkEmail();
    this.checkCoachName();
    this.checkRanchName();
    if (this.isNameInvalid == false && this.isYearInvalid == false && this.isCoachNameInvalid == false && this.isStatusInvalid && this.isPhoneNumberInvalid == false && this.isRanchNameInvalid == false && this.isEmailInvalid == false) {
      this.readyToSend = true;
    } else {
      this.readyToSend = false;
    }
  }

  checkName() {
    if (this.rider.name === '') {
      this.isNameInvalid = true;
    }
    else {
      this.isNameInvalid = false;
    }
  }

  checkYear() {
    if (this.rider.yearOfBirth === null) {
      this.isYearInvalid = true;
    } else {
      this.isYearInvalid = false;
    }
  }

  checkStatus() {
    if (this.rider.status === '') {
      this.isStatusInvalid = true;
    } else {
      this.isStatusInvalid = false;
    }
  }

  checkPhoneNumber() {
    if (this.rider.phoneNumber === '') {
      this.isPhoneNumberInvalid = true;
    } else {
      this.isPhoneNumberInvalid = false;
    }
  }

  checkEmail() {
    if (this.rider.email === '') {
      this.isEmailInvalid = true;
    } else {
      this.isEmailInvalid = false;
    }
  }

  checkCoachName() {
    if (this.rider.nameOfCoach === '') {
      this.isCoachNameInvalid = true;
    } else {
      this.isCoachNameInvalid = false;
    }
  }

  checkRanchName() {
    if (this.rider.ranchName === '') {
      this.isRanchNameInvalid = true;
    } else {
      this.isRanchNameInvalid = false;
    }
  }




}
