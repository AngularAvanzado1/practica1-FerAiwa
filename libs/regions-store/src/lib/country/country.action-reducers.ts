import { CountryState } from './country.reducer';

export function addCountry(state: CountryState, { country }) {
  return {
    ...state,
    countries: [...state.countries, country]
  };
}

export function addCountries(state: CountryState, { countries }) {
  const storedCountriesIds = state.countries.map(ct => ct.id);

  const newCountries = countries.reduce((list, country) =>
    storedCountriesIds.includes(country.id) ? list : list.push(country) && list
    , [])

  return {
    ...state,
    countries: [...newCountries, ...state.countries]
  }
}

export function setLendingTypes(state: CountryState, { lendingTypes }) {
  return {
    ...state,
    lendingTypes,
  }
}

export function setIncomeLevels(state: CountryState, { incomeLevels }) {
  return {
    ...state,
    incomeLevels,
  }
}



