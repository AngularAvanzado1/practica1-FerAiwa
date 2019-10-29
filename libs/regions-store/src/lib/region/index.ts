import * as fromRegionStore from './region.reducer';
import * as RegionActions from './region.actions';
import * as RegionSelectors from './region.selectors';
import { RegionEffects } from './region.effects';
import { RegionStoreModule } from './region.module';

export {
  RegionStoreModule
};

export {
  fromRegionStore,
  RegionActions,
  RegionEffects,
  RegionSelectors
};
