import { Component, Renderer2 } from '@angular/core';
import { RegionQuizzService } from './region-quizz.service';

@Component({
  selector: 'ab-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  /*
    En vez de comunicarse directamente con el modulo de regions, hacerlo a través del router
  */

  constructor(public quizService: RegionQuizzService, private renderer: Renderer2) { }

  checkValidAnswer(question, selectedChoice, { target }) {
    const isValidAnswer = question.validAnswer === question.choices[selectedChoice];
    const color = isValidAnswer ? '#a7eea7' : 'red';
    this.renderer.setStyle(target, 'background-color', color)
  }

}
