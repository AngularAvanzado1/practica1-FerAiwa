import { createAction, props } from '@ngrx/store';
import { Region } from '@a-boss/domain';
import { RegionsState } from './region.reducer';


const loadRegions = {
  start: createAction(
    '[Regions] Load Regions'
  ),
  success: createAction(
    '[Regions] Load Regions ✔️', props<{ regions: Region[] }>()
  ),
  error: createAction(
    '[Regions] Load Regions ❌'
  )
};

export const loadRegionCountries = {
  start: createAction(
    '[Regions] Load Region Countries', props<{ code: string }>()
  ),
  success: createAction(
    '[Regions] Load Region Countries ✔️', props<{ code: string }>()
  )
}

export const rehydrateFeatureState = {
  start: createAction(
    '[Regions] Rehydrate feature State'
  ),
  success: createAction(
    '[Regions] Rehydrate Feature State ✔', props<{ storedState: RegionsState }>()
  )
}

export const selectRegion = createAction(
  '[Regions] Select Active Region', props<{ code: string }>()
);

export const loaders = {
  regions: loadRegions,
  regionCountries: loadRegionCountries,
}
