import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Number } from '../number';
import { StartNumberService } from '../start-number.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[app-start-number-row]',
  templateUrl: './start-number-row.component.html',
  styleUrls: ['./start-number-row.component.css']
})
export class StartNumberRowComponent implements OnInit {

  @Input()
  number: Number;
  @Output()
  refresh: EventEmitter<void>;
  @Output()
  refreshWithData: EventEmitter<Number[]>;
  cloneNumber: Number;
  editMode: boolean;
  fieldErrors: string[];
  isSaving: boolean;

  constructor(private numberService: StartNumberService, private modalService: NgbModal) {
    this.number = { startNrValue: null, riderName: '', horseName: '', riderId: null, horseId: null, isActive: false, year: null },
      this.refresh = new EventEmitter();
    this.refreshWithData = new EventEmitter();
  }

  ngOnInit() {
  }

  //on edit mode clones temporarily the selected data
  setEditMode(em: boolean) {
    this.editMode = em;
    if (em) {
      this.cloneNumber = JSON.parse(JSON.stringify(this.number));
    }
  }

  //checks the inputs and sends a put request
  saveNumber(): void {
    this.isSaving = true;
    this.numberService.modifyStartNumber(this.cloneNumber)
      .then(data => {
        this.setEditMode(false);
        this.refreshWithData.emit(data);
      })
      .catch(errorInfos => {
        if (errorInfos) {
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
