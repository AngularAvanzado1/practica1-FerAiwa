import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RegionEffects } from './region.effects';
import * as fromRegionStore from './region.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromRegionStore.regionsFeatureKey,
      fromRegionStore.reducer,
      //{ metaReducers: fromRegionsStore.regionMetaReducers }
    ),
    EffectsModule.forFeature([RegionEffects]),
  ],
  providers: [RegionEffects]
})
export class RegionStoreModule { }
