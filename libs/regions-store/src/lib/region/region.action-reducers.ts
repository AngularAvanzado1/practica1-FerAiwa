import { RegionState } from './region.reducer';

export function addRegions(state: RegionState, { regions }) {
  return {
    ...state,
    regions: [...state.regions, ...regions]
  }
}

export function addLoadedRegion(state: RegionState, { code }) {
  return {
    ...state,
    loadedRegions: [...state.loadedRegions, code]
  }
}

