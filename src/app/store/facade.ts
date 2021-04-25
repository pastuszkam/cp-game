import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as ACTIONS from './actions';
import * as SELECTORS from './selectors';
import { Resource, RootState } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataFacade {

  public pickedResource$ = this.store.pipe(select(SELECTORS.selectPickedResource));
  public players$ = this.store.pipe(select(SELECTORS.selectPlayers));


  constructor(private store: Store<RootState>) {}

  public fetchAll(): void {
    this.store.dispatch(ACTIONS.fetchAll());
  }

  public changeResource(pickedResource: Resource): void {
    this.store.dispatch(ACTIONS.pickedResourceChange(
      { pickedResource }
    ));
  }

  public playGame(): void {
    this.store.dispatch(ACTIONS.playGame());
  }
}
