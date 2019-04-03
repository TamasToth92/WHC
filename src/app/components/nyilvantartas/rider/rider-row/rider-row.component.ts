import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rider } from '../rider';
import { RiderService } from '../rider.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[app-rider-row]',
  templateUrl: './rider-row.component.html',
  styleUrls: ['./rider-row.component.css']
})
export class RiderRowComponent implements OnInit {

@Input()
rider: Rider;
@Output()
refresh: EventEmitter<void>;
@Output()
refreshWithData: EventEmitter<Rider[]>;
cloneRider: Rider;
editMode: boolean;
fieldErrors: string[];
isSaving: boolean;


  constructor(private riderService: RiderService, private modalService: NgbModal) {
    this.rider = { name: '', yearOfBirth: null, status: '', phoneNumber: '', email: '', nameOfCoach: '', ranchName:''},
    this.refresh = new EventEmitter();
    this.refreshWithData = new EventEmitter();
   }

  ngOnInit() {
  }
  //On edit mode temporarily clones the data
  setEditMode(em: boolean) {
    this.editMode = em;
    if(em) {
      this.cloneRider = JSON.parse(JSON.stringify(this.rider));
    }
  }

  //saves the new inputs if they were correct
  saveRider(): void {
    this.isSaving = true;
    this.riderService.modifyRider(this.cloneRider)
    .then(data => {
      this.setEditMode(false);
      this.refreshWithData.emit(data);
    })
    .catch(errorInfos => {
      if(errorInfos) {
        this.fieldErrors = errorInfos;
      } else {
        this.refresh.emit();
      }
    })
    .finally(() => {
      this.isSaving = false;
    });
  }

}
