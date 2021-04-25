import { IGameState, IPeopleRequestResult, Resource } from '../models';

export const initialGameState: IGameState = {
  data: {
    people: [],
    starships: [],
    error: '',
    isLoading: false
  },
  players: {
    0: { id: 0, score: 0, card: null, winner: false },
    1: { id: 1, score: 0, card: null, winner: false }
  },
  pickedResource:  Resource.People
};

