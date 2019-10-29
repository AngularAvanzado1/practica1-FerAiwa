export interface Region {
  id: string;
  code: string;
  iso2Code: string;
  name: string;
}

export interface Country {
  id: string;
  iso2Code: string;
  name: string;
  capitalCity: string;
  longitude: string;
  latitude: string;
  region: CountryDetail | string;
  adminRegion: CountryDetail | string;
  incomeLevel: CountryDetail | string;
  lendingType: CountryDetail | string;
}

export interface CountryDetail {
  id: string;
  iso2Code: string;
  value: string;
}
