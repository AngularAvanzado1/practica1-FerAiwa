import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ab-ui-region-card',
  template: `
    <header>
      <ng-content select="img"></ng-content>
      <h1 style="font-size: 1rem;   text-transform: uppercase;">{{ name }}</h1>
      </header>
      `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class RegionCardComponent {
  @Input() name: string;
}
