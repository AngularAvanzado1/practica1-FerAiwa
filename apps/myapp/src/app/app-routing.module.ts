import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CountryResolver } from './core/resolvers/country.resolver';
import { MainRegionsResolver } from './core/resolvers/main-regions.resolver';

//todo: layout component
const routes: Routes = [
  {
    path: '',
    redirectTo: 'quiz',
    pathMatch: 'full',
  },
  {
    path: 'region',
    loadChildren: () => import('./features/regions/regions.module').then(m => m.RegionsModule),
    resolve: {
      regions: MainRegionsResolver,
    }
  },
  {
    path: 'country/:id',
    loadChildren: () => import('./features/country/country.module').then(m => m.CountryModule),
    resolve: {
      country: CountryResolver,
    },
  },
  {
    path: 'quiz',
    loadChildren: () => import('./features/quiz/quiz.module').then(m => m.QuizModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
