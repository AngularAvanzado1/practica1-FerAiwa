import { Injectable } from "@angular/core";
@Injectable()
export class RegionQuizzService {

}
/*
import { RegionFacadeService } from '@a-boss/regions-store';
import { QUESTIONTYPES } from './store/questionTypes';
import * as FromQuizzUtils from './region-quizz.utils';
import { concatMap, concat } from 'rxjs/operators';
import { of, from } from 'rxjs';

@Injectable()
export class RegionQuizzService {

  questionMap = new Map<string, any>(Object.entries(QUESTIONTYPES));

  getQuestions() {
    this.regionsFacadeService
      .getAllCountries()
      .pipe(
        concatMap(this.generateCountryQuestions)
      )
  }


  getRandomQuestionType() {
    return this.questionMap[FromQuizzUtils.getRandomIndex(this.questionMap.size)]
  }

  getFormatedQuestionText(text: string, subject: string) {
    return text.replace('$SUBJECT$', subject)
  }


  generateCountryQuestions(countryList, maxQuestions = 20, maxChoices = 4) {
    return of([]
      .fill({}, 0, maxQuestions - 1)
      .map((item, i) => {
        const { questionKey, answerKey, text } = this.getRandomQuestionType();

        const randCountryIndexes = FromQuizzUtils.getRandomNonRepeatedIndexes(4, countryList.length - 1);
        const validAnswerIndex = FromQuizzUtils.getRandomIndex(randCountryIndexes.length - 1);
        const questionSubject = countryList[validAnswerIndex][questionKey];

        return {
          id: i + 1,
          question: this.getFormatedQuestionText(text, questionSubject),
          choices: randCountryIndexes.map((j: number) => countryList[j][answerKey]),
          validAnswer: validAnswerIndex,
          selectedAnswer: null,
        }
      })
    )
  }



  constructor(private regionsFacadeService: RegionFacadeService) { }




}
 */
