import { createAction, props } from '@ngrx/store';
import { IStarship, IPerson, Resource } from 'src/app/models';

// fetch resources
export const fetchAllSucceeded = createAction(
  'Fetch All Succeeded',
  props<{ people: IPerson[], starships: IStarship[] }>()
);

export const fetchAllFailed = createAction(
  'Fetch All Failed',
  props<{ error: string }>()
);

export const fetchAll = createAction(
  'Fetch All Requested'
);

// play game
export const playGame = createAction(
  'Play Game',
);

export const proceedGame = createAction(
  'Proceed Game',
  props<{
    cards: [IPerson | IStarship, IPerson | IStarship],
    winner: 0 | 1,
  }>()
);

// change resource
export const pickedResourceChange = createAction(
  'Picked Resource Change',
  props<{ pickedResource: Resource; }>()
);

