import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectEditMoviePageDomain = state => state.editMoviePage || initialState;

const makeSelecteditMoviePage = () =>
  createSelector(
    selectEditMoviePageDomain,
    substate => substate,
  );

const makeSelectCurrentMovieError = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.currentMovie.error,
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
const makeSelectCurrentMovieName = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.currentMovie.name,
  );
const makeSelectCurrentMovieYear = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.currentMovie.year,
  );
const makeSelectCurrentMovieCategory = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.currentMovie.category,
  );
const makeSelectCurrentMovieImage = () =>
  createSelector(
    selectEditMoviePageDomain,
    editMoviePage => editMoviePage.currentMovie.image,
  );
export {
  makeSelecteditMoviePage,
  makeSelectCurrentMovieError,
  makeSelectCurrentMovie,
  makeSelectCurrentMovieId,
  makeSelectCurrentMovieName,
  makeSelectCurrentMovieYear,
  makeSelectCurrentMovieCategory,
  makeSelectCurrentMovieImage

};
export { selectEditMoviePageDomain };

