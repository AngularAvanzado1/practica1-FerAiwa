import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, zip } from 'rxjs';
import { skipWhile, tap, map } from 'rxjs/operators';
import { Region, Country } from '@a-boss/domain';
import { AppState } from './regions-store.module';
import { CountryActions, CountrySelectors } from './country';
import { RegionSelectors, RegionActions } from './region';
import * as AppSelectors from './region-store.selectors';

@Injectable()
export class RegionFacadeService {

  constructor(private store: Store<AppState>) {
    this.store.dispatch(CountryActions.loaders.incomeLevels.start());
    this.store.dispatch(CountryActions.loaders.lendingTypes.start());
  }

  public getCountry = (id: string): Observable<Country> =>
    this.store.pipe(
      select(AppSelectors.getCountryExtended, { id }),
      tap(country =>
        country || this.store.dispatch(CountryActions.loaders.country.start({ id }))
      ),
      skipWhile(country => !country)
    );


  public getPrimaryRegions = (): Observable<Region[]> =>
    this.store.pipe(
      select(RegionSelectors.getRegions),
      tap(regions =>
        regions.length || this.store.dispatch(RegionActions.loaders.regions.start())
      ),
      skipWhile(regions => !regions.length)
    );


  public getRegionCountries = (code: string) =>
    zip(
      this.store.select(RegionSelectors.getLoadedRegions),
      this.store.select(CountrySelectors.getCountries),
    ).pipe(
      map(([loadedRegions, countries]) => {
        if (loadedRegions.includes(code)) {
          return countries.filter(ct => ct.region === code)
        }
        this.store.dispatch(RegionActions.loadRegionCountries.start({ code }));
        return null
      }),
      skipWhile(countries => !countries)
    );

}
