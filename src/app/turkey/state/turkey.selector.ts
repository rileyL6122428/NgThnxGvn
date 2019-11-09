import { createSelector } from '@ngrx/store';
import { AppState, TurkeyState } from './turkey.reducer';

const selectTurkeyState = (appState: AppState) => appState.turkey;

export const selectCurrentTurkey = createSelector(
  selectTurkeyState,
  (turkeyState: TurkeyState) => turkeyState.turkeys[turkeyState.selectedTurkeyIndex]
);

export const selectTurkeys = createSelector(
  selectTurkeyState,
  (turkeyState: TurkeyState) => turkeyState.turkeys
);
