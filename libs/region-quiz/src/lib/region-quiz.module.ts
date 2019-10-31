import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromQuizz from './store/quizz.reducer';
// import { QuizzEffects } from './store/quizz.effects';
import { NxModule } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    // StoreModule.forRoot(
    //   {},
    //   {
    //     metaReducers: !environment.production ? [] : [],
    //     runtimeChecks: {
    //       strictActionImmutability: true,
    //       strictStateImmutability: true
    //     }
    //   }
    // ),
    // EffectsModule.forRoot([QuizzEffects]),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    // StoreModule.forFeature(fromQuizz.QUIZZ_FEATURE_KEY, fromQuizz.reducer)
  ]
})
export class RegionQuizModule { }
