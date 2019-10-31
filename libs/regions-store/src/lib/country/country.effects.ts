import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of, Observable } from 'rxjs';
import { concatMap, withLatestFrom, map, catchError } from 'rxjs/operators';

import { WorldRegionsDataService } from '@a-boss/data';
import { LocalStorageEffects } from '../region-store-localstorage.effects';
import { CountriesState, countriesFeatureKey } from './country.reducer';
import * as CountryActions from './country.actions';
import * as CountrySelectors from './country.selectors';
import { RegionSelectors } from '../region';


@Injectable()
export class CountryEffects extends LocalStorageEffects<CountriesState> {

  public loadCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CountryActions.loaders.country.start
      ),
      withLatestFrom(
        this.store.select(CountrySelectors.getCountries)
      ),
      concatMap(([{ id }, countries]) => {
        const isCountryLoaded = countries.find(country => country.id === id);

        return isCountryLoaded ? EMPTY : this.fetchCountry(id)
      }
      )
    )
  );

  public loadLendingTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CountryActions.loaders.lendingTypes.start
      ),
      withLatestFrom(
        this.store.select(CountrySelectors.countriesState)
      ),
      concatMap(([, { lendingTypes }]) =>
        lendingTypes.length ? EMPTY : this.fetchLendingTypes()
      ),
    )
  );

  public loadIncomeLevels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CountryActions.loaders.incomeLevels.start
      ),
      withLatestFrom(
        this.store.select(CountrySelectors.countriesState)
      ),
      concatMap(([, { incomeLevels }]) =>
        incomeLevels.length ? EMPTY : this.fetchIncomeLevels()
      ),
    ));


  private fetchCountry = (id: string): Observable<Action> =>
    this.worldRegionsDataService.getCountry(id)
      .pipe(
        map((country =>
          CountryActions.loaders.country.success({ country }))
        ),
        catchError(e =>
          of(CountryActions.loaders.country.error())
        )
      )


  private fetchLendingTypes = (): Observable<Action> =>
    this.worldRegionsDataService
      .getLendingTypes()
      .pipe(
        map(lendingTypes =>
          CountryActions.loaders.lendingTypes.success({ lendingTypes })
        ),
        catchError(e =>
          of(CountryActions.loaders.lendingTypes.error())
        )
      )

  private fetchIncomeLevels = (): Observable<Action> =>
    this.worldRegionsDataService
      .getIncomeLevels()
      .pipe(
        map(incomeLevels =>
          CountryActions.loaders.incomeLevels.success({ incomeLevels })
        ),
        catchError(e =>
          of(CountryActions.loaders.incomeLevels.error())
        )
      )

  constructor(
    actions$: Actions,
    store: Store<CountriesState>,
    private worldRegionsDataService: WorldRegionsDataService
  ) {
    super(
      countriesFeatureKey,
      store,
      actions$,
      CountryActions.rehydrateFeatureState,
    )
  }

}
