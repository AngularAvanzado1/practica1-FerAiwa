import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'ab-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesComponent {
  countries$ = this.route.data.pipe(pluck('countries'));

  constructor(private route: ActivatedRoute) { }

}
