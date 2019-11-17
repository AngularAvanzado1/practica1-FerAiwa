import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, tap, map } from 'rxjs/operators';

@Component({
  selector: 'ab-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesComponent {
  countries$ = this.route.data.pipe(pluck('countries'));

  constructor(private route: ActivatedRoute) { }

}
