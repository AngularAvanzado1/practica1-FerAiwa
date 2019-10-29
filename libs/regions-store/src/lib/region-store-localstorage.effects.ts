import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, ofType, createEffect, OnInitEffects } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { concatMap, skip } from 'rxjs/operators';

@Injectable()
export class LocalStorageEffects<T> implements OnInitEffects {

  public rehydrateFeatureState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(this.rehydrateAction.start),
      concatMap(() => {
        const storedState = this.getFeatureState(this.featureKey);
        return storedState
          ? of(this.rehydrateAction.success({ storedState }))
          : EMPTY;
      })
    )
  )

  public getFeatureState = (featureKey: string) =>
    JSON.parse(window.localStorage.getItem(featureKey))


  public saveOnFeatureChanges(...featureKeys: string[]) {
    try {
      for (const key of featureKeys) {
        const featureState$ = this.store.pipe(select(key), skip(1))

        featureState$.subscribe(state => {
          window.localStorage.setItem(key, JSON.stringify(state))
        })
      }
    } catch (e) {
      console.log('State couldn´t be save at local storage.')
    }
  }

  constructor(
    public featureKey: string,
    public store: Store<T>,
    public actions$: Actions,
    private rehydrateAction,
  ) { }

  ngrxOnInitEffects(): Action {
    this.saveOnFeatureChanges(this.featureKey);

    return { type: this.rehydrateAction.start.type };
  }

}
