import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import * as RegionActions from './region/region.actions';
import * as CountryActions from './country/country.actions';

@Injectable()
export class AppEffects {

  public loadRegionCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        RegionActions.loadRegionCountries.success
      ),
      switchMap(({ code, countries }) => [
        CountryActions.addCountries({ countries }),
        RegionActions.addLoadedRegion({ code }),
      ])
    )
  );

  constructor(private actions$: Actions) { }
}
