import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySearcherComponent } from './country-searcher/country-searcher.component';
import { CountrySugestionsComponent } from './country-sugestions/country-sugestions.component';
import { FilterCountriesPipe } from './filter-countries.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CountrySearcherComponent, CountrySugestionsComponent, FilterCountriesPipe],
  exports: [CountrySearcherComponent]
})
export class CountrySearcherModule { }
