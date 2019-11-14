import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionCardComponent } from './region-card/region-card.component';
import { ArticleCardComponent } from './article-card/article-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RegionCardComponent, ArticleCardComponent],
  exports: [RegionCardComponent, ArticleCardComponent]
})
export class UiModule { }
