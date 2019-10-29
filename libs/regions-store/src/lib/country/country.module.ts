import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CountryEffects } from './country.effects';
import * as fromCountryStore from './country.reducer';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCountryStore.countriesFeatureKey,
      fromCountryStore.reducer),
    EffectsModule.forFeature([CountryEffects])
  ],
  providers: [CountryEffects]
})
export class CountryStoreModule { }
