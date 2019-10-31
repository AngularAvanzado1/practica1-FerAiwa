import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegionQuizzService } from './region-quizz.service';
import { QuizComponent } from './quiz.component';

@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: QuizComponent }
    ])
  ],

  providers: [RegionQuizzService]
})
export class QuizModule { }
