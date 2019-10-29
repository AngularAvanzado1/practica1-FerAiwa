import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionCardComponent } from './region-card/region-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RegionCardComponent],
  exports: [RegionCardComponent]
})
export class UiModule {}
