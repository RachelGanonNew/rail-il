import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMovie = state => state.moviesListPage || initialState;

const makeSelectMoviesList = () =>
  createSelector(
    selectMovie,
    moviesListPage => moviesListPage.list ,
  );

const makeSelectLoading = () =>
  createSelector(
    selectMovie,
    moviesListPage => moviesListPage.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectMovie,
    moviesListPage => moviesListPage.error,
  );

export{
  makeSelectMoviesList,
  makeSelectLoading,
  makeSelectError,
};