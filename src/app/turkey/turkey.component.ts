import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './state/turkey.reducer';
import { Observable } from 'rxjs';
import { Turkey } from './state/turkey.model';
import * as TurkeyActions from './state/turkey.action';
import * as TurkeySelectors from './state/turkey.selector';

@Component({
  selector: 'app-turkey',
  templateUrl: './turkey.component.html',
  styleUrls: ['./turkey.component.scss']
})
export class TurkeyComponent implements OnInit {

  turkeys$: Observable<Turkey[]>;
  private _selectedTurkey: Turkey;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.turkeys$ = this.store.pipe(select(TurkeySelectors.selectTurkeys));

    this.store
      .pipe(select(TurkeySelectors.selectCurrentTurkey))
      .subscribe(
        (selectedTurkey) => this._selectedTurkey = selectedTurkey
      );
  }

  set selectedTurkey(turkey: Turkey) {
    this.store.dispatch(TurkeyActions.selectTurkey({ turkey }));
  }

  get selectedTurkey(): Turkey {
    return this._selectedTurkey;
  }

}
