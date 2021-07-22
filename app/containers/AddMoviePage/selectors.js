import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddMoviePageDomain = state => state.addMoviePage || initialState;

const makeSelectAddMoviePage = () =>
  createSelector(
    selectAddMoviePageDomain,
    substate => substate,
  );

const makeSelectNewMovieIdError = () =>
  createSelector(
    selectAddMoviePageDomain,
    addMoviePage => addMoviePage.newMovie.error,
  );

const makeSelectCategoriesList= () =>
  createSelector(
    selectAddMoviePageDomain,
    addMoviePage => addMoviePage.newMovie.categoryList,
  );


const makeSelectNewMovieId = () =>
  createSelector(
    selectAddMoviePageDomain,
    addMoviePage => addMoviePage.newMovie.id,
  );

export {
  makeSelectAddMoviePage,
  makeSelectNewMovieId,
  makeSelectNewMovieIdError,
  makeSelectCategoriesList
};
export { selectAddMoviePageDomain };

