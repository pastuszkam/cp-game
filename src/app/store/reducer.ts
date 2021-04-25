import { createReducer, on, Action } from '@ngrx/store';
import { initialGameState } from './state';
import * as ACTIONS from './actions';
import { IGameState } from '../models';

export const gameReducerCreator = createReducer(
  initialGameState,
  on(ACTIONS.fetchAllSucceeded, (state, action) => ({
    ...state,
    data: {
      people: action.people,
      starships: action.starships,
      isLoading: false,
      error: ''
    },
  })),
  on(ACTIONS.fetchAll, (state, action) => ({
    ...state,
    data: {
      people: [],
      starships: [],
      isLoading: true,
      error: ''
    },
  })),
  on(ACTIONS.fetchAllFailed, (state, action) => ({
    ...state,
    data: {
      people: [],
      starships: [],
      isLoading: false,
      error: action.error
    }
  })),

  on(ACTIONS.pickedResourceChange, (state, { pickedResource }) => ({
    ...state,
    pickedResource,
  })),

  on(ACTIONS.proceedGame, (state, { cards, winner }) => ({
    ...state,
    players: {
      0: {
        id: 0,
        score: state.players[0].score + 1 - winner,
        card: cards[0],
        winner: winner === 0,
      },
      1: {
        id: 1,
        score: state.players[1].score + winner,
        card: cards[1],
        winner: winner === 1,
      },
    }
  })),
);

export function gameReducer(state: IGameState | undefined, action: Action): any {
  return gameReducerCreator(state, action);
}
