import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CountrySimple } from '../country-searcher/country-searcher.component';

@Component({
  selector: 'wbc-country-sugestions',
  template: `
  <ul>
    <li *ngFor="let country of countries | filterCountries: searchText; trackBy: trackById;"
        [value]="country.name"
        [style.backgroundColor]="getListElementColor(country.id)"
        (click)="selectCountry(country)">
      {{country.name}}
    </li>
  </ul>`,
  styleUrls: ['./country-sugestions.component.css']
})
export class CountrySugestionsComponent {
  @Input() countries: CountrySimple[];
  @Input() searchText = '';
  @Input() selectionColor = 'orange';
  @Output() selectedCountry = new EventEmitter<any>();
  selectedId = '';

  selectCountry(country) {
    this.selectedId = country.id;
    this.selectedCountry.next(country);
  }

  getListElementColor = (id: string) =>
    this.selectedId === id ? this.selectionColor : 'white';

  trackById = (index: string, id: string) => id;
}
