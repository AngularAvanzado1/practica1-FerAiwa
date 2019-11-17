import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WorldRegionsDataService } from '@a-boss/data';
import { UiModule } from '@a-boss/ui';
import { CountryCardComponent } from './country-card/country-card.component';
@NgModule({
  imports: [CommonModule, FormsModule, UiModule],
  declarations: [CountryCardComponent],
  providers: [WorldRegionsDataService],
  exports: [CountryCardComponent]
})
export class CountryCardModule { }
