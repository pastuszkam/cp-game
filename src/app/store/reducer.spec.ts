import { IGameState, IPerson, IStarship, Resource } from '../models';
import { fetchAll, fetchAllFailed, fetchAllSucceeded, pickedResourceChange, proceedGame } from './actions';
import { gameReducer } from './reducer';

describe('Reducer', () => {
  let initialState: IGameState;

  beforeEach(() => {
    initialState = {
      data: {
        people: [],
        starships: [],
        error: '',
        isLoading: false
      },
      players: {
        0: { id: 0, score: 2, card: null, winner: true },
        1: { id: 1, score: 3, card: null, winner: false }
      },
      pickedResource:  Resource.People
    };
  });

  describe('fetchAllSucceeded', () => {
    it('should update data', () => {
      const actionFakeData: { people: IPerson[], starships: IStarship[] } = {
        people: [
          { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/1/', films: [''], species: [''], vehicles: [''], starships: [''], created: '2014-12-09T13:50:51.644000Z', edited: '2014-12-20T21:17:56.891000Z', url: 'https://swapi.co/api/people/1/' },
        ],
        starships: []
      };

      const action = fetchAllSucceeded(actionFakeData);
      const state = gameReducer(initialState, action);
      const expected = {
        data: {
          people: [
            { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/1/', films: [''], species: [''], vehicles: [''], starships: [''], created: '2014-12-09T13:50:51.644000Z', edited: '2014-12-20T21:17:56.891000Z', url: 'https://swapi.co/api/people/1/' },
          ],
          starships: [],
          error: '',
          isLoading: false
        },
        players: {
          0: { id: 0, score: 2, card: null, winner: true },
          1: { id: 1, score: 3, card: null, winner: false }
        },
        pickedResource:  Resource.People
      };

      expect(state).toEqual(expected);
    });
  });

  describe('fetchAll', () => {
    it('should update data', () => {
      const action = fetchAll();
      const state = gameReducer(initialState, action);
      const expected = {
        data: {
          people: [],
          starships: [],
          error: '',
          isLoading: true
        },
        players: {
          0: { id: 0, score: 2, card: null, winner: true },
          1: { id: 1, score: 3, card: null, winner: false }
        },
        pickedResource:  Resource.People
      };

      expect(state).toEqual(expected);
    });
  });

  describe('fetchAllFailed', () => {
    it('should update data', () => {
      const action = fetchAllFailed({
        error: 'error'
      });
      const state = gameReducer(initialState, action);
      const expected = {
        data: {
          people: [],
          starships: [],
          error: 'error',
          isLoading: false
        },
        players: {
          0: { id: 0, score: 2, card: null, winner: true },
          1: { id: 1, score: 3, card: null, winner: false }
        },
        pickedResource:  Resource.People
      };

      expect(state).toEqual(expected);
    });
  });

  describe('pickedResourceChange', () => {
    it('should update data', () => {
      const action = pickedResourceChange({
        pickedResource: Resource.Starships
      });
      const state = gameReducer(initialState, action);
      const expected = {
        data: {
          people: [],
          starships: [],
          error: '',
          isLoading: false
        },
        players: {
          0: { id: 0, score: 2, card: null, winner: true },
          1: { id: 1, score: 3, card: null, winner: false }
        },
        pickedResource: Resource.Starships
      };

      expect(state).toEqual(expected);
    });
  });

  describe('proceedGame', () => {
    it('should update data', () => {
      const action = proceedGame({
          cards: [
            { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/1/', films: [''], species: [''], vehicles: [''], starships: [''], created: '2014-12-09T13:50:51.644000Z', edited: '2014-12-20T21:17:56.891000Z', url: 'https://swapi.co/api/people/1/' },
            // tslint:disable-next-line: max-line-length
            { name: 'CPO', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/1/', films: [''], species: [''], vehicles: [''], starships: [''], created: '2014-12-09T13:50:51.644000Z', edited: '2014-12-20T21:17:56.891000Z', url: 'https://swapi.co/api/people/1/' }
          ],
          winner: 1,
      });
      const state = gameReducer(initialState, action);
      const expected = {
        data: {
          people: [],
          starships: [],
          error: '',
          isLoading: false
        },
        players: {
          0: {
            id: 0,
            score: 2,
            // tslint:disable-next-line: max-line-length
            card: { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/1/', films: [''], species: [''], vehicles: [''], starships: [''], created: '2014-12-09T13:50:51.644000Z', edited: '2014-12-20T21:17:56.891000Z', url: 'https://swapi.co/api/people/1/' },
            winner: false
          },
          1: {
            id: 1,
            score: 4,
            // tslint:disable-next-line: max-line-length
            card: { name: 'CPO', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/1/', films: [''], species: [''], vehicles: [''], starships: [''], created: '2014-12-09T13:50:51.644000Z', edited: '2014-12-20T21:17:56.891000Z', url: 'https://swapi.co/api/people/1/' },
            winner: true
          }
        },
        pickedResource: Resource.People
      };

      expect(state).toEqual(expected);
    });
  });
});
