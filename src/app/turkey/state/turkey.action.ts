import { createAction, props } from '@ngrx/store';
import { Turkey } from './turkey.model';

export const selectTurkey = createAction(
  '[Turkey] Select Turkey',
  props<{ turkeyId: number }>()
);

export const updateTurkey = createAction(
  '[Turkey] Update Turkey',
  props<{ updatedTurkey: Turkey }>()
);
