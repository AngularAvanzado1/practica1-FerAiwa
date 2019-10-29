import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { WorldRegionsDataService } from '@a-boss/data';
import { CountryStoreModule } from './country/country.module';
import { RegionStoreModule } from './region/region.module';
import { CountriesState } from './country/country.reducer';
import { RegionsState } from './region/region.reducer';
import { RegionFacadeService } from './region.service';

export interface AppState {
  country: CountriesState,
  region: RegionsState
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ), EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    //StoreRoutingConectingModule.forRoot({ routerState: RouterState.minimal })
    RegionStoreModule,
    CountryStoreModule,
  ],
  providers: [WorldRegionsDataService, RegionFacadeService]
})
export class RegionsStoreModule { }
