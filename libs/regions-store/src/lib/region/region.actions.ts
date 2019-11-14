import { createAction, props } from '@ngrx/store';
import { Region, Country } from '@a-boss/domain';

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
    '[Regions] Load Region Countries ✔️', props<{ code: string, countries: Country[] }>()
  )
}

export const addLoadedRegion = createAction(
  '[Regions] Add loaded region',
  props<{ code: string }>()
)


export const loaders = {
  regions: loadRegions,
  regionCountries: loadRegionCountries,
}
