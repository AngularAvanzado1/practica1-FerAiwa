import { Action, createReducer, on } from '@ngrx/store';
import { Country, CountryDetail } from '@a-boss/domain';
import * as CountryActions from './country.actions';
import * as CountryReducers from './country.action-reducers';

export const countryFeatureKey = 'country';

export interface CountryState {
  countries: Country[];
  incomeLevels: CountryDetail[];
  lendingTypes: CountryDetail[];
}

export const countryInitialState: CountryState = {
  countries: [],
  incomeLevels: [],
  lendingTypes: [],
};

const countryReducer = createReducer(
  countryInitialState,
  on(
    CountryActions.loaders.country.success,
    CountryReducers.addCountry
  ),
  on(
    CountryActions.loaders.lendingTypes.success,
    CountryReducers.setLendingTypes
  ),
  on(
    CountryActions.loaders.incomeLevels.success,
    CountryReducers.setIncomeLevels
  ),
  on(
    CountryActions.addCountries,
    CountryReducers.addCountries
  )
);

export function reducer(state: CountryState | undefined, action: Action) {
  return countryReducer(state, action);
}
