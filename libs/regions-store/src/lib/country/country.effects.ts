import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { concatMap, map, catchError } from 'rxjs/operators';
import { WorldRegionsDataService } from '@a-boss/data';
import * as CountryActions from './country.actions';

@Injectable()
export class CountryEffects {

  public loadCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CountryActions.loaders.country.start
      ),
      concatMap(({ id }) =>
        this.worldRegionsDataService.getCountry(id).pipe(
          map((country =>
            CountryActions.loaders.country.success({ country }))
          ),
          catchError(e =>
            of(CountryActions.loaders.country.error())
          )
        )
      )
    )
  );

  public loadLendingTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CountryActions.loaders.lendingTypes.start
      ),
      concatMap(() =>
        this.worldRegionsDataService.getLendingTypes().pipe(
          map(lendingTypes =>
            CountryActions.loaders.lendingTypes.success({ lendingTypes })
          ),
          catchError(e =>
            of(CountryActions.loaders.lendingTypes.error())
          )
        )
      ),
    )
  );

  public loadIncomeLevels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CountryActions.loaders.incomeLevels.start
      ),
      concatMap(() =>
        this.worldRegionsDataService.getIncomeLevels().pipe(
          map(incomeLevels =>
            CountryActions.loaders.incomeLevels.success({ incomeLevels })
          ),
          catchError(e =>
            of(CountryActions.loaders.incomeLevels.error())
          )
        ),
      )
    )
  );

  constructor(
    private actions$: Actions,
    private worldRegionsDataService: WorldRegionsDataService
  ) { }

}
