import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Turkey } from '../../state/turkey.model';

@Component({
  selector: 'app-turkey-list',
  templateUrl: './turkey-list.component.html',
  styleUrls: ['./turkey-list.component.scss']
})
export class TurkeyListComponent {

  @Input() turkeys: Turkey[];
  @Input() selectedTurkey: Turkey;
  @Output() selection: EventEmitter<Turkey>

  constructor() {
    this.selection = new EventEmitter();
  }

}
