import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IGameState, RootState, FEATURE_KEY } from '../models';

export const selectGameFeature = createFeatureSelector<RootState, IGameState>(
  FEATURE_KEY,
);

export const selectPickedResource = createSelector(
  selectGameFeature,
  (state: IGameState) => state.pickedResource
);

export const selectStarships = createSelector(
  selectGameFeature,
  (state: IGameState) => state.data.starships,
);

export const selectPeople = createSelector(
  selectGameFeature,
  (state: IGameState) => state.data.people,
);

export const selectPlayers = createSelector(
  selectGameFeature,
  (state: IGameState) => Object.values(state.players)
);

