import { Injectable } from "@angular/core";
import { RegionFacadeService } from '@a-boss/regions-store';
import { QUESTIONTYPES, RegionQuizzUtils } from '@a-boss/region-quiz';
import { map } from 'rxjs/operators';
import { Country } from '@a-boss/domain';

@Injectable()
export class RegionQuizzService {

  public questions$ = this.regionsFacadeService
    .getAllCountries()
    .pipe(
      map(countries => this.generateCountryQuestions(countries))
    );


  private getRandomQuestionType = () =>
    QUESTIONTYPES[RegionQuizzUtils.getRandomIndex(2)]

  private getFormatedQuestionText = (text: string, subject: string) =>
    text.replace('$SUBJECT$', subject)


  /**
  * Generate country questions of different type, with one  valid and n invalid choices.
  **/
  private generateCountryQuestions(countryList, maxQuestions = 20, maxChoices = 4) {
    const questionArr = Array(maxQuestions).fill('');
    const countries = countryList.flat();

    const countryQuestions = questionArr
      .map((item, i) => {
        const { questionKey, answerKey, text, type } = this.getRandomQuestionType();

        try {
          const randomIndexes = {
            choices: RegionQuizzUtils.getRandomNonRepeatedIndexes(4, countries.length - 1),
            validChoice: RegionQuizzUtils.getRandomIndex(maxChoices - 1)
          }
          const choicesIndex = randomIndexes.choices;
          const validChoiceIndex = randomIndexes.choices[randomIndexes.validChoice]
          const questionSubject = countries[validChoiceIndex][questionKey];

          const choices = choicesIndex
            .map((j: number) => countries[j][answerKey])
            .filter(answer => answer) //prevent empty fields

          const question = {
            id: i + 1,
            type,
            subject: questionSubject,
            question: this.getFormatedQuestionText(text, questionSubject),
            choices,
            validAnswer: countries[validChoiceIndex][answerKey],
            selectedAnswer: null,
          }

          return question
        }
        catch (e) {
          console.log(e.message);
        }
      })
    console.log(countryQuestions);
    return countryQuestions
  }


  constructor(private regionsFacadeService: RegionFacadeService) { }

}
