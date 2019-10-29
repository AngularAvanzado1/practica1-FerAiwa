import { CountriesState } from './country.reducer';

export function setCountryState(state: CountriesState, { storedState }) {
  const { countries, lendingTypes, incomeLevels } = storedState;

  return {
    ...state,
    countries,
    lendingTypes,
    incomeLevels,
  }
}

export function addCountries(state: CountriesState, { countries }) {
  return {
    ...state,
    countries: [...state.countries, ...countries]
  }
}

export function setLendingTypes(state, { lendingTypes }) {
  return {
    ...state,
    lendingTypes,
  }
}

export function setIncomeLevels(state, { incomeLevels }) {
  return {
    ...state,
    incomeLevels,
  }
}


export function addCountry(state, { country }) {
  return {
    ...state,
    countries: [...state.countries, country]
  };
}
