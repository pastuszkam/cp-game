import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { forkJoin, of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom, tap } from 'rxjs/operators';
import { DataService } from '../services/data-service/data-service.service';

import { IGameState, Resource, RootState } from '../models';
import { fetchAll, fetchAllSucceeded, fetchAllFailed, playGame, proceedGame } from './actions';
import { selectPeople, selectPickedResource, selectPlayers, selectStarships } from './selectors';
import { GameService } from '../services/game-service/game-service.service';

@Injectable()
export class DataStoreEffects {

  constructor(
    private dataService: DataService,
    private gameService: GameService,
    private actions$: Actions,
    private store$: Store<RootState>
  ) {}

  fetchAllData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchAll),
      switchMap(() =>
        forkJoin([this.dataService.getPeople(), this.dataService.getShips()]).pipe(
          map( ([people, starships]) => fetchAllSucceeded({ people, starships })),
          catchError(error =>
            of(fetchAllFailed({ error: error.message }))
          )
        )
      )
    )
  );

  playGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playGame),
      withLatestFrom(
        this.store$.pipe(select(selectPickedResource)),
        this.store$.pipe(select(selectStarships)),
        this.store$.pipe(select(selectPeople)),
      ),
      tap(([action, resource, starships, people]) => {
        this.store$.dispatch(proceedGame(
          this.gameService.triggerGame(resource, starships, people)
        ));
      }
  )), { dispatch: false });
}
