import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, OnInitEffects } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { concatMap, map, catchError } from 'rxjs/operators';
import { WorldRegionsDataService } from '@a-boss/data';
import * as RegionActions from './region.actions';

@Injectable()
export class RegionEffects implements OnInitEffects {

  public loadRegions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        RegionActions.loaders.regions.start
      ),
      concatMap(() =>
        this.regionsApiService.getPrimaryRegions().pipe(
          map(regions =>
            RegionActions.loaders.regions.success({ regions })
          ),
          catchError(() =>
            of(RegionActions.loaders.regions.error())
          )
        )
      )
    )
  );

  public loadRegionCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        RegionActions.loadRegionCountries.start
      ),
      concatMap(({ code }) =>
        this.regionsApiService.getRegionCountries(code).pipe(
          map(countries =>
            RegionActions.loadRegionCountries.success({ code, countries }),
          ),
          catchError(() =>
            EMPTY
          )
        )
      )
    )
  );

  ngrxOnInitEffects() {
    return {
      type: RegionActions.loaders.regions.start.type
    }
  }

  constructor(
    private actions$: Actions,
    private regionsApiService: WorldRegionsDataService
  ) { }
}
