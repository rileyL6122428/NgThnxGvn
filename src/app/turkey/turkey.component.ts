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

  turkeys$: Observable<Turkey[]>;
  selectedTurkey$: Observable<Turkey>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.turkeys$ = this.store.pipe(
      select(Selectors.selectTurkeys)
    );

    this.selectedTurkey$ = this.store.pipe(
      select(Selectors.selectCurrentTurkey)
    );
  }

  set selectedTurkey(turkey: Turkey) {
    this.store.dispatch(Actions.selectTurkey({ turkey }));
  }

  handleUpdatedTurkey(updatedTurkey: Turkey): void {
    this.store.dispatch(Actions.updateTurkey({ updatedTurkey }));
  }

}
