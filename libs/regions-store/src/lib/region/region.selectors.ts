import { createFeatureSelector, createSelector } from '@ngrx/store';
import { regionFeatureKey, RegionState } from './region.reducer';

export const regionState = createFeatureSelector<RegionState>(
  regionFeatureKey
);

export const getRegion = createSelector(
  regionState,
  (state: RegionState, props: { code: string }) =>
    state.regions.find(region => region.code === props.code)
)

export const getRegions = createSelector(
  regionState, (state) => state.regions
)

export const getLoadedRegions = createSelector(
  regionState, (state) => state.loadedRegions
)
