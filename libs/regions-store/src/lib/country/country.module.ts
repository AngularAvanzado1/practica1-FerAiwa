import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CountryEffects } from './country.effects';
import * as fromCountry from './country.reducer';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCountry.countryFeatureKey,
      fromCountry.reducer),
    EffectsModule.forFeature([CountryEffects])
  ],
  providers: [CountryEffects]
})
export class CountryStoreModule { }
