import { Action, createReducer, on } from '@ngrx/store';
import { Country, CountryDetail } from '@a-boss/domain';
import * as CountriesActions from './country.actions';
import * as CountriesReducers from './country.action-reducers';

export const countriesFeatureKey = 'country';

export interface CountriesState {
  countries: Country[];
  incomeLevels: CountryDetail[];
  lendingTypes: CountryDetail[];
}

export const initialState: CountriesState = {
  countries: [],
  incomeLevels: [],
  lendingTypes: [],
};

const countriesReducer = createReducer(
  initialState,
  on(
    CountriesActions.rehydrateFeatureState.success,
    CountriesReducers.setCountryState
  ),
  on(
    CountriesActions.loaders.country.success,
    CountriesReducers.addCountry
  ),
  on(
    CountriesActions.loaders.lendingTypes.success,
    CountriesReducers.setLendingTypes
  ),
  on(
    CountriesActions.loaders.incomeLevels.success,
    CountriesReducers.setIncomeLevels
  ),
  on(
    CountriesActions.addCountries,
    CountriesReducers.addCountries
  ),
);


export function reducer(state: CountriesState | undefined, action: Action) {
  return countriesReducer(state, action);
}
