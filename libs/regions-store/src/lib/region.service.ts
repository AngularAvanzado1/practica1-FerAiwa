import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { take, skipWhile } from 'rxjs/operators';

import { Region, Country } from '@a-boss/domain';
import { AppState } from './regions-store.module';
import { CountrySelectors, CountryActions } from './country';
import { RegionSelectors, RegionActions } from './region';

@Injectable()
export class RegionFacadeService {

  constructor(private actions$: Actions, private appStore: Store<AppState>) {
    this.appStore.dispatch(CountryActions.loaders.incomeLevels.start());
    this.appStore.dispatch(CountryActions.loaders.lendingTypes.start());
  }

  getPrimaryRegions(): Observable<Region[]> {
    this.appStore.dispatch(RegionActions.loaders.regions.start())

    return this.appStore.pipe(
      select(RegionSelectors.getRegions),
      skipWhile(regionMap => !regionMap.length),
      take(1)
    )
  }

  getRegionCountries(code: string): Observable<Country[]> {
    this.appStore.dispatch(RegionActions.loadRegionCountries.start({ code }));

    return this.appStore.pipe(
      select(CountrySelectors.getRegionCountries, code),
      skipWhile(countries => !countries.length),
      take(1)
    )
  }

  getCountry(id: string): Observable<Country> {
    this.appStore.dispatch(CountryActions.loaders.country.start({ id }))

    return this.appStore.pipe(
      select(CountrySelectors.getCountry, { id }),
      skipWhile(country => !country),
      take(1)
    )
  }


}
