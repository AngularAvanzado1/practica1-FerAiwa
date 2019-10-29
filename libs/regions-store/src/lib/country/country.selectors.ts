import { createFeatureSelector, createSelector } from '@ngrx/store';
import { countriesFeatureKey, CountriesState } from './country.reducer';

export const countriesState = createFeatureSelector<CountriesState>(
  countriesFeatureKey
);

export const getCountries = createSelector(
  countriesState,
  ({ countries }: CountriesState) => countries
);

export const getCountry = createSelector(
  countriesState,
  ({ lendingTypes, incomeLevels, countries }: CountriesState, props: { id: string }) => {
    const country = countries.find(ct => ct.id === props.id);

    return {
      ...country,
      lendingType: lendingTypes.find(type => type.id === country.lendingType),
      incomeLevel: incomeLevels.find(type => type.id === country.incomeLevel)
    }
  }
);

export const getRegionCountries = createSelector(
  countriesState,
  ({ countries }: CountriesState, code: string) =>
    countries.filter(country => country.region === code)
);
