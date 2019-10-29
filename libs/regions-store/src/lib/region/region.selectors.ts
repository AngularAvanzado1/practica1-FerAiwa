import { createFeatureSelector, createSelector } from '@ngrx/store';
import { regionsFeatureKey, RegionsState } from './region.reducer';

export const regionState = createFeatureSelector<RegionsState>(
  regionsFeatureKey
);

export const getRegion = createSelector(
  regionState,
  (state: RegionsState, props: { code: string }) =>
    state.regions.find(region => region.code === props.code)
)

export const getRegions = createSelector(
  regionState, (state) => state.regions
)

export const getSelectedRegion = createSelector(
  regionState, (state) => state.selectedRegion
)

export const getLoadedRegions = createSelector(
  regionState, (state) => state.loadedRegions
)
