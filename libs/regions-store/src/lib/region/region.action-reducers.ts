import { RegionsState } from './region.reducer';

export function setRegionsState(state: RegionsState, { storedState }): RegionsState {
  return {
    ...state,
    regions: storedState.regions,
    selectedRegion: storedState.selectedRegion,
    loadedRegions: [...storedState.loadedRegions]
  }
}

export function addRegions(state: RegionsState, { regions }): RegionsState {
  return {
    ...state,
    regions: [...state.regions, ...regions]
  }
}

export function addLoadedRegion(state: RegionsState, { code }): RegionsState {
  return {
    ...state,
    loadedRegions: [...state.loadedRegions, code]
  }
}

export function setActiveRegion(state, { code }): RegionsState {
  return {
    ...state,
    selectedRegion: code
  }
}

