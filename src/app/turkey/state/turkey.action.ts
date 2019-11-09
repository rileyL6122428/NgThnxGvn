import { createAction, props } from '@ngrx/store';
import { Turkey } from './turkey.model';

export const selectTurkey = createAction(
  '[Turkey] Select Turkey',
  props<{ turkey: Turkey }>()
);

export const updateTurkey = createAction(
  '[Turkey] Update Turkey',
  props<{ updatedTurkey: Turkey }>()
);
