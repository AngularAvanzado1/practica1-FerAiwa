import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { WorldRegionsDataModule } from '@a-boss/data';
import { CountrySearcherModule, CountrySearcherComponent } from '@a-boss/country-searcher';
import { CountryCardModule } from '@a-boss/country-card';
import { CountryCardComponent } from 'libs/country-card/src/lib/country-card/country-card.component';
import 'zone.js';

@NgModule({
  imports: [BrowserModule, WorldRegionsDataModule, CountrySearcherModule, CountryCardModule],
  entryComponents: [CountryCardComponent, CountrySearcherComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const countryCard = createCustomElement(CountryCardComponent, {
      injector: this.injector
    });
    const countrySearcher = createCustomElement(CountrySearcherComponent, {
      injector: this.injector
    });

    customElements.define('wbc-country', countryCard);
    customElements.define('wbc-country-searcher', countrySearcher);
  }
}
