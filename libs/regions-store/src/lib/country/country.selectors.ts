import { createFeatureSelector, createSelector } from '@ngrx/store';
import { countryFeatureKey, CountryState } from './country.reducer';

export const countriesState = createFeatureSelector<CountryState>(
  countryFeatureKey
);

export const getCountries = createSelector(
  countriesState,
  (state => state.countries)
);

export const getCountry = createSelector(
  countriesState,
  (state: CountryState, props: { id: string }) => {
    const { lendingTypes, incomeLevels, countries } = state;
    const country = countries.find(ct => ct.id === props.id);

    if (!country) return undefined;

    return {
      ...country,
      lendingType: lendingTypes.find(type => type.id === country.lendingType).value,
      incomeLevel: incomeLevels.find(type => type.id === country.incomeLevel).value,
    }
  }
);

export const getRegionCountries = createSelector(
  countriesState,
  ({ countries }: CountryState, code: string) =>
    countries.filter(country => country.region === code)
);
