import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IPerson, IStarship, IStarshipsRequestResult, IPeopleRequestResult, Resource } from '../../models';

// should be move to config etc.
const BASE_URL = 'https://swapi.dev';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<IPerson[]> {
    return this.http
      .get<IPeopleRequestResult>(`${BASE_URL}/api/people`)
      .pipe(map(response => response.results));
  }

  getShips(): Observable<IStarship[]> {
    return this.http
      .get<IStarshipsRequestResult>(`${BASE_URL}/api/starships`)
      .pipe(map(response => response.results));
  }
}
