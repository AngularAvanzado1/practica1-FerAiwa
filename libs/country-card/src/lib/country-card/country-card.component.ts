import { Component, Input, ChangeDetectionStrategy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { Country } from '@a-boss/domain';
import { WorldRegionsDataService } from '@a-boss/data';

@Component({
  selector: 'wbc-country',
  templateUrl: './country-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryCardComponent implements OnChanges {
  @Input() id: string;
  @Input() showFlag = true;
  country: Country;

  constructor(private worldRegionsData: WorldRegionsDataService, private changeDetector: ChangeDetectorRef) { }

  ngOnChanges() {
    if (this.id) this.loadCountryDetails(this.id);
  }

  loadCountryDetails(id: string) {
    this.worldRegionsData
      .getCountry(id)
      .subscribe(country => {
        this.country = country
        this.changeDetector.markForCheck();
      });
  }
}
