import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMovie = state => state.detailsMoviePage || initialState;

const makeSelectMovieDetails = () =>
  createSelector(
    selectMovie,
    detailsMoviePage => detailsMoviePage.currentMovie 
  );

const makeSelectLoading = () =>
  createSelector(
    selectMovie,
    detailsMoviePage => detailsMoviePage.loading,
  );
  const makeSelectRated = () =>
  createSelector(
    selectMovie,
    detailsMoviePage => detailsMoviePage.currentMovie.Rated,
  );
const makeSelectError = () =>
  createSelector(
    selectMovie,
    detailsMoviePage => detailsMoviePage.error,
  );

export{
  makeSelectMovieDetails,
  makeSelectLoading,
  makeSelectError,
  makeSelectRated
};