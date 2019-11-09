import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Actions from './state/turkey.action';
import { Turkey } from './state/turkey.model';
import { AppState } from './state/turkey.reducer';
import * as Selectors from './state/turkey.selector';

@Component({
  selector: 'app-turkey',
  templateUrl: './turkey.component.html',
  styleUrls: ['./turkey.component.scss']
})
export class TurkeyComponent implements OnInit {

  selectedTurkey$: Observable<Turkey>;
  turkeys$: Observable<Turkey[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.selectedTurkey$ = this.store.pipe(
      select(Selectors.selectCurrentTurkey)
    );

    this.turkeys$ = this.store.pipe(
      select(Selectors.selectTurkeys)
    );
  }

  set selectedTurkey(turkey: Turkey) {
    this.store.dispatch(Actions.selectTurkey({ turkey }));
  }

  handleUpdatedTurkey(updatedTurkey: Turkey): void {
    this.store.dispatch(Actions.updateTurkey({ updatedTurkey }));
  }

}
