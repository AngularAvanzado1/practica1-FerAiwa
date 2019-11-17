import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Country } from '@a-boss/domain';

@Component({
  selector: 'angular-boss-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent {
  public country$: Observable<Country> = this.route.data.pipe(pluck('country'));

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  getGoogleMapsUrl({ latitude, longitude }) {
    const coords = `${latitude},${longitude}`
    const baseUrl = 'https://www.google.com/maps/embed/v1/view?zoom=6&center=';
    const key = '&key=AIzaSyC4kywXAuRPMJdFeMxoUreibFX7S4-71Dg';

    return this.sanitizer.bypassSecurityTrustResourceUrl(baseUrl + coords + key);
  }
}
