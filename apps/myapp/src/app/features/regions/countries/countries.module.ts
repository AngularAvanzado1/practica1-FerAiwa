import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries.component';
import { UiModule } from '@a-boss/ui';
// import { RegionCountriesResolver } from '../../../main-regions.resolver';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent
  }
];

@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule
  ]
})
export class CountriesModule { }
