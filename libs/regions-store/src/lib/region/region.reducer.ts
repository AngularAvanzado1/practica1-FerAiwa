import { Action, createReducer, on } from '@ngrx/store';
import { Region } from '@a-boss/domain';
import * as RegionActions from './region.actions';
import * as RegionReducers from './region.action-reducers';

export const regionsFeatureKey = 'region';
export interface RegionsState {
  regions: Region[],
  selectedRegion: string,
  loadedRegions: string[]
}

export const regionInitialState: RegionsState = {
  regions: [],
  selectedRegion: null,
  loadedRegions: [],
};

const regionsReducer = createReducer(
  regionInitialState,
  on(
    RegionActions.rehydrateFeatureState.success,
    RegionReducers.setRegionsState
  ),
  on(
    RegionActions.loaders.regions.success,
    RegionReducers.addRegions
  ),
  on(
    RegionActions.loaders.regionCountries.success,
    RegionReducers.addLoadedRegion
  ),
  on(
    RegionActions.selectRegion,
    RegionReducers.setActiveRegion
  )
);

export function reducer(state: RegionsState | undefined, action: Action) {
  return regionsReducer(state, action);
}
