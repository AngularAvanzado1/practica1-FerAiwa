import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'ab-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsComponent {
  public regions$ = this.route.data.pipe(pluck('regions'));

  constructor(private route: ActivatedRoute) { }

}
