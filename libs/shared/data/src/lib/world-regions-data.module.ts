import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WorldRegionsDataService } from './world-regions-data.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [WorldRegionsDataService]
})
export class WorldRegionsDataModule { }
