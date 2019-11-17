import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CountryResolver } from './resolvers/country.resolver';
import { MainRegionsResolver } from './resolvers/main-regions.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'region',
    pathMatch: 'full',
  },
  {
    path: 'region',
    loadChildren: () => import('./features/regions/regions.module').then(m => m.RegionsModule),
    resolve: {
      regions: MainRegionsResolver
    }
  },
  {
    path: 'country/:id',
    loadChildren: () => import('./features/country/country.module').then(m => m.CountryModule),
    resolve: {
      country: CountryResolver,
    }
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
