import produce from 'immer';
import {
  DEFAULT_ACTION, GET_NEW_MOVIE_ID, GET_NEW_MOVIE_ID_SUCCESS, GET_NEW_MOVIE_ID_ERROR,
  ADD_NEW_MOVIE_SUCCESS, ADD_NEW_MOVIE_ERROR, ADD_NEW_MOVIE
} from './constants';
export const initialState = {
  newMovie: {
    error: false,
    id: 0,
    name: '',
    year: '',
    director: '',
    image: '',
    category: ''

  },
  
};

const addMoviesPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {

      case DEFAULT_ACTION:
        break;

      case GET_NEW_MOVIE_ID:
      case ADD_NEW_MOVIE:
        draft.newMovie.error = false;
        break;

      case GET_NEW_MOVIE_ID_SUCCESS:
        draft.newMovie.id = action.newId;
        draft.newMovie.error = false;
        break;

      case GET_NEW_MOVIE_ID_ERROR:
      case ADD_NEW_MOVIE_ERROR:
        draft.newMovie.id = 0;
        draft.newMovie.error = true;
        break;
      case ADD_NEW_MOVIE_SUCCESS:
        draft.newMovie = action.newMovie;
        window.open("/moviesList", "_self");
        break

      default:
        break;
    }
  });

export default addMoviesPageReducer;
