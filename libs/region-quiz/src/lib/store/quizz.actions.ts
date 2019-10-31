import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

export enum QuizzActionTypes {
  LoadCountries = '[Quizz] Load Countries',
  RestartQuizz = '[Quizz] Restart',
  UpdateQuestion = '[Quizz] Update Question'
}

export const loadCountries = createAction(
  QuizzActionTypes.LoadCountries
);

export const restartQuizz = createAction(
  QuizzActionTypes.RestartQuizz
);

export const updateQuestion = createAction(
  QuizzActionTypes.UpdateQuestion
)



export const fromQuizzActions = {
  loadCountries,
  restartQuizz,
  updateQuestion
};
