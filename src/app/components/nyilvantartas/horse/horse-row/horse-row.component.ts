import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Horse } from '../interface/horse';
import { HorseService } from '../horse.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteHorseComponent } from '../delete-horse/delete-horse.component';

@Component({
    selector: '[app-horse-row]',
    templateUrl: './horse-row.component.html',
    styleUrls: ['./horse-row.component.css']
})
export class HorseRowComponent implements OnInit {

    @Input()
    horse: Horse;
    @Output()
    refresh: EventEmitter<void>;
    @Output()
    refreshWithData: EventEmitter<Horse[]>;
    cloneHorse: Horse;
    editMode: boolean;
    fieldErrors: string[];
    isSaving: boolean;

    constructor(private horseService: HorseService, private modalService: NgbModal) {
        this.horse = { name: "", breed: "", yearOfBirth: null };
        this.editMode = false;
        this.refresh = new EventEmitter();
        this.refreshWithData = new EventEmitter();
        this.fieldErrors = [];
        this.isSaving = false;
    }

    ngOnInit() {
    }
    //As we enter into edit mode the selected datas are cloned temporarily
    setEditMode(em: boolean) {
        this.editMode = em;
        if (em) {
            this.cloneHorse = JSON.parse(JSON.stringify(this.horse));
        }
    }

    //if the inputs are correct the new inputs are saved and the table is refreshed with the new datas
    saveHorse(): void {
        this.isSaving = true;
        this.horseService.modifyHorse(this.cloneHorse)
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

    //opening the delete modal
    //TODO, under development 
    deleteHorse(): void {
        const modalRef = this.modalService.open(DeleteHorseComponent);
        modalRef.componentInstance.name = this.horse.name;
        modalRef.result.then(() => {
            this.horseService.removeHorse(this.horse.id).then(data => {

                this.refreshWithData.emit((data as any).horses);
            });
        }).catch(() => { });
    }

}

