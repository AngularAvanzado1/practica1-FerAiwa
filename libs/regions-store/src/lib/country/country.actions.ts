import { createAction, props } from '@ngrx/store';
import { Country, CountryDetail } from '@a-boss/domain';
import { CountriesState } from './country.reducer';

const loadCountry = {
  start: createAction(
    '[Countries] Load Country', props<{ id: string }>()
  ),
  success: createAction(
    '[Countries] Load Country ✔', props<{ country: Country }>()
  ),
  error: createAction(
    '[Countries] Load Country ❌ '
  )
};

const loadIncomeLevels = {
  start: createAction(
    '[Countries] Load Income Levels'
  ),
  success: createAction(
    '[Countries] Load Income Levels ✔', props<{ incomeLevels: CountryDetail[] }>()
  ),
  error: createAction(
    '[Countries] Load Income Levels ❌'
  )
};

const loadLendingTypes = {
  start: createAction(
    '[Countries] Load Lending Types'
  ),
  success: createAction(
    '[Countries] Load Lending Types ✔', props<{ lendingTypes: CountryDetail[] }>()
  ),
  error: createAction(
    '[Countries] Load Lending Types ❌'
  )
};

export const rehydrateFeatureState = {
  start: createAction(
    '[Countries] Rehydrate feature State'
  ),
  success: createAction(
    '[Countries] Rehydrate Feature State ✔', props<{ storedState: CountriesState }>()
  )
}

export const addCountries = createAction(
  '[Countries] Added countries', props<{ countries: Country[] }>()
);

export const loaders = {
  country: loadCountry,
  incomeLevels: loadIncomeLevels,
  lendingTypes: loadLendingTypes
}
