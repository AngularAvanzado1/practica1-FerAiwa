import { Component, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { countryList } from '../countries';
export interface CountrySimple { id: string; name: string; };

@Component({
  selector: 'wbc-country-searcher',
  template: `
  <div>
    <input placeholder="Looking for a country?"
          type="text"
          [(value)]="searchText"
          (keyup)="setSearchText($event)"
          autofocus>
    <wbc-country-sugestions
      [countries]="countries"
      [searchText]="searchText"
      (selectedCountry)="onSelectedCountry($event)">
    </wbc-country-sugestions>
  </div>
  `,
  styleUrls: ['./country-searcher.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountrySearcherComponent {
  countries: CountrySimple[] = countryList;
  searchText = '';
  @Output() selectedCountry = new EventEmitter<string>();

  setSearchText = ({ target }) =>
    this.searchText = target.value;

  onSelectedCountry = (country) => {
    this.selectedCountry.next(country.id);
  }
}
