export const QUIZZ_FEATURE_KEY = 'quizz';

export type iso2Code = string;

export interface Question {
  id: number,
  type: 'capital' | 'flag' | 'country',
  choices: string,
  valid: number,
  selectedAnswer: number,
}

export interface QuizzState {
  questions: Question[],
  activeQuestion: number,
  selectedCapitals: iso2Code[],
  selectedCountryRegion: iso2Code[],
  selectedFlags: iso2Code[],
}

export const quizzInitialState: QuizzState = {
  questions: [],
  activeQuestion: -1,
  selectedCapitals: [],
  selectedCountryRegion: [],
  selectedFlags: [],
}



