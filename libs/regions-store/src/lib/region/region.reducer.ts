import { Action, createReducer, on } from '@ngrx/store';
import { Region } from '@a-boss/domain';
import * as RegionActions from './region.actions';
import * as RegionReducers from './region.action-reducers';

export const regionFeatureKey = 'region';
export interface RegionState {
  regions: Region[],
  loadedRegions: string[]
}

export const regionInitialState: RegionState = {
  regions: [],
  loadedRegions: [],
};

const regionReducer = createReducer(
  regionInitialState,
  on(
    RegionActions.loaders.regions.success,
    RegionReducers.addRegions
  ),
  on(
    RegionActions.addLoadedRegion,
    RegionReducers.addLoadedRegion
  )
);

export function reducer(state: RegionState | undefined, action: Action) {
  return regionReducer(state, action);
}
