import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './state/turkey.reducer';
import { Observable } from 'rxjs';
import { Turkey } from './state/turkey.model';
import * as Actions from './state/turkey.action';
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

}
