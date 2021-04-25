export const FEATURE_KEY = 'Game';

export interface RootState {
  readonly [FEATURE_KEY]: IGameState;
}

export interface IGameState {
  data: IData;
  pickedResource: Resource;
  players: {[id: number]: IPlayer};
}

export interface IData {
  people: IPerson[];
  starships: IStarship[];
  error: string;
  isLoading: boolean;
}
export interface IPeopleRequestResult {
  count: number;
  next: string;
  previous: string;
  results: IPerson[];
}

export interface IPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IPlayer {
  id: number;
  score: number;
  card: IPerson | IStarship | null;
  winner: boolean;
}

export interface IPlayers {
  [id: number]: IPlayer;
}

export interface IStarship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string,
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: string[];
  starship_class: string;
  url: string;
}

export interface IStarshipsRequestResult {
  count: number;
  next: string;
  previous: string;
  results: IStarship[];
}

export enum Resource {
  People = 'People',
  Starships = 'Starships'
}
