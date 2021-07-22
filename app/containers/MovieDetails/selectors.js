import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMovie = state => state.moviesDetailsPage || initialState;

const makeSelectMovieDetails = () =>
  createSelector(
    selectMovie,
    moviesDetailsPage => moviesDetailsPage.currentMovie ,
  );

const makeSelectLoading = () =>
  createSelector(
    selectMovie,
    moviesDetailsPage => moviesDetailsPage.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectMovie,
    moviesDetailsPage => moviesDetailsPage.error,
  );

export{
  makeSelectMovieDetails,
  makeSelectLoading,
  makeSelectError,
};