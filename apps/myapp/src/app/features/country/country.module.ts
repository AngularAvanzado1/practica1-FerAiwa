import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from '@a-boss/ui';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent
  }
]

@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes),
  ]
})
export class CountryModule { }
