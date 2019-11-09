import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Turkey } from '../../state/turkey.model';
import { TurkeyFormComponent, EditTurkeyResult } from '../turkey-form/turkey-form.component';

@Component({
  selector: 'app-turkey-editor',
  templateUrl: './turkey-editor.component.html',
  styleUrls: ['./turkey-editor.component.scss']
})
export class TurkeyEditorComponent {

  @Input() turkey: Turkey;
  @Output() update: EventEmitter<Turkey>;

  constructor(
    private ngbModal: NgbModal
  ) {
    this.update = new EventEmitter();
  }

  editTurkey(turkey: Turkey): void {
    const modalRef = this.ngbModal.open(TurkeyFormComponent);
    modalRef.componentInstance.turkey = turkey;
    modalRef.result.then((updatedTurkey: EditTurkeyResult) => {
      if (updatedTurkey) {
        this.update.emit(updatedTurkey);
      }
    });
  }

}
