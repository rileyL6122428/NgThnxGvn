import * as TurkeyActions from './turkey.action';
import { Turkey } from './turkey.model';
import { on, createReducer } from '@ngrx/store';

export const turkeyFeatureKey = 'turkey';

export interface TurkeyState {
  turkeys: Turkey[];
  selectedTurkeyIndex: number | null;
}

export interface AppState {
  turkey: TurkeyState;
}

const initialState: TurkeyState = {
  selectedTurkeyIndex: 0,
  turkeys: [
    {
      id: 1,
      name: 'Gobblé Decartes',
      quote: 'I thank, therefore I gobble.',
      imgName: 'gobble-decarte.jpg'
    },
    {
      id: 2,
      name: 'Thomas Ghobbes',
      quote: 'The life of turkey (in a state of nature) is solitary, poor, nasty, brutish, and short.',
      imgName: 'thomas-ghobbs.png'
    },
    {
      id: 3,
      name: 'Turclitus Pheasants',
      quote: 'One cannot peck the same mashed potatoes twice.',
      imgName: 'turclitus-pheasants.png'
    }
  ]
};

export const turkeyReducer = createReducer(
  initialState,

  on(TurkeyActions.selectTurkey, (state, { turkey }) => ({
    ...state,
    selectedTurkeyIndex: state.turkeys.indexOf(turkey)
  })),

  on(TurkeyActions.updateTurkey, (state, { updatedTurkey }) => ({
    ...state,
    turkeys: state.turkeys.map(turkey =>
      turkey.id === updatedTurkey.id ? updatedTurkey : turkey
    )
  }))
);
