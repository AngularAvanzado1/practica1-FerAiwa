import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { WorldRegionsDataService } from '@a-boss/data';
import { AppEffects } from './region-store.effects';
import { RegionFacadeService } from './region.service';
import { CountryStoreModule } from './country/country.module';
import { RegionStoreModule } from './region/region.module';
import { RegionState } from './region/region.reducer';
import { CountryState } from './country/country.reducer';

export interface AppState {
  region: RegionState,
  country: CountryState,
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    RegionStoreModule,
    CountryStoreModule,
  ],
  providers: [WorldRegionsDataService, RegionFacadeService]
})
export class RegionsStoreModule { }
