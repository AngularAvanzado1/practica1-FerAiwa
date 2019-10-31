import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QUIZZ_FEATURE_KEY, QuizzState } from './quizz.reducer';

const getQuizzState = createFeatureSelector<QuizzState>(QUIZZ_FEATURE_KEY);

const getQuestion = createSelector(
  getQuizzState,
  (state: QuizzState) => state.questions[state.activeQuestion]
);

export const quizzQuery = {
  getQuestion,

};
