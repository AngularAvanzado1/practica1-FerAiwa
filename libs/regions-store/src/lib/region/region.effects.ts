import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of, Observable } from 'rxjs';
import { concatMap, withLatestFrom, switchMap, map, catchError } from 'rxjs/operators';

import { WorldRegionsDataService } from '@a-boss/data';
import { regionsFeatureKey, RegionsState, } from './region.reducer';
import { LocalStorageEffects } from '../region-store-localstorage.effects';
import * as CountryActions from '../country/country.actions';
import * as RegionActions from './region.actions';
import * as RegionSelectors from './region.selectors';

@Injectable()
export class RegionEffects extends LocalStorageEffects<RegionsState> {

  public loadRegions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        RegionActions.loaders.regions.start
      ),
      withLatestFrom(
        this.store.select(RegionSelectors.getRegions)
      ),
      concatMap(([, regions]) =>
        regions.length ? EMPTY : this.fetchRegions()
      ),
    ),
  );

  public loadRegionCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        RegionActions.loadRegionCountries.start
      ),
      withLatestFrom(
        this.store.select(RegionSelectors.getLoadedRegions)
      ),
      concatMap(([{ code }, loadedRegions]) => {
        const isRegionCached = loadedRegions.includes(code);

        return isRegionCached ? EMPTY : this.fetchRegionCountries(code)
      }),
    )
  )

  private fetchRegions = (): Observable<Action> =>
    this.regionsApiService
      .getPrimaryRegions()
      .pipe(
        map(regions =>
          RegionActions.loaders.regions.success({ regions })
        ),
        catchError(() =>
          of(RegionActions.loaders.regions.error())
        )
      );


  private fetchRegionCountries = (code: string): Observable<Action> =>
    this.regionsApiService
      .getRegionCountries(code)
      .pipe(
        switchMap(countries => [
          CountryActions.addCountries({ countries }),
          RegionActions.loadRegionCountries.success({ code }),
        ]),
        catchError(() =>
          EMPTY
        )
      );

  constructor(
    actions$: Actions,
    store: Store<RegionsState>,
    private regionsApiService: WorldRegionsDataService
  ) {
    super(
      regionsFeatureKey,
      store,
      actions$,
      RegionActions.rehydrateFeatureState,
    )
  }

}
