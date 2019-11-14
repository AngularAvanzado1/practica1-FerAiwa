import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ab-ui-article-card',
  template: `
  <article>
    <header>
      <ng-content select="h1"></ng-content>
      <figure>
          <ng-content select="img"></ng-content>
      </figure>
    </header>
    <main>
        <ng-content select=".art-image"></ng-content>
      <div class="art-content">
        <ng-content ></ng-content>
      </div>
    </main>
    <footer>
      <ng-content select="footer"></ng-content>
    </footer>
  </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent { }
