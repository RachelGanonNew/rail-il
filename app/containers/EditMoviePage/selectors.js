import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectEditMoviePageDomain = state => state.editMoviePage || initialState;

const makeSelecteditMoviePage = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage
  );

const makeSelectCurrentMovieError = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.error,
  );

const makeSelectCurrentMovie = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.currentMovie,
  );


const makeSelectCurrentMovieId = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.currentMovie.id,
  );
const makeSelectCurrentMoviePlot = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.currentMovie.Plot,
  );
const makeSelectCurrentMovieTitle = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.currentMovie.Title,
  );
const makeSelectCurrentMovieYear = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.currentMovie.Year,
  );
const makeSelectCurrentMovieCategory = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.currentMovie.Genre,
  );
const makeSelectCurrentMovieImage = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.currentMovie.Poster,
  );
export {
  makeSelecteditMoviePage,
  makeSelectCurrentMovieError,
  makeSelectCurrentMovie,
  makeSelectCurrentMovieId,
  makeSelectCurrentMovieTitle,
  makeSelectCurrentMovieYear,
  makeSelectCurrentMovieCategory,
  makeSelectCurrentMovieImage,
  makeSelectCurrentMoviePlot

};
export { selectEditMoviePageDomain };

