import { Component, OnInit } from '@angular/core';
import { Turkey } from '../../state/turkey.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export type EditTurkeyResult = Turkey | null;

@Component({
  selector: 'app-turkey-form',
  templateUrl: './turkey-form.component.html',
  styleUrls: ['./turkey-form.component.scss']
})
export class TurkeyFormComponent implements OnInit {

  turkey: Turkey;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(this.turkey.name),
      quote: this.formBuilder.control(this.turkey.quote)
    });
  }

  submit(): void {
    this.activeModal.close({
      id: this.turkey.id,
      name: this.form.value.name,
      quote: this.form.value.quote,
      imgName: this.turkey.imgName
    } as EditTurkeyResult);
  }

  cancel(): void {
    this.activeModal.close(null as EditTurkeyResult);
  }

}
