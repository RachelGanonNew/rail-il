import produce from 'immer';
import {
  GET_CURRENT_MOVIE, GET_CURRENT_MOVIE_ERROR, GET_CURRENT_MOVIE_SUCCESS,
  EDIT_CURRENT_MOVIE, EDIT_CURRENT_MOVIE_ERROR, EDIT_CURRENT_MOVIE_SUCCESS
} from './constants';
export const initialState = {
  currentMovie: {
    Director: "",
    Genre: "",
    Plot: "",
    Poster: "",
    Rated: "",
    Title: "",
    Writer: "",
    Year: "",
    id: 0,
  },
  loading: false,
  error:false
};

const editCurrentMoviePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {

      case GET_CURRENT_MOVIE:
      case EDIT_CURRENT_MOVIE:
        draft.loading = true;
        draft.error = true;
        break;

      case GET_CURRENT_MOVIE_SUCCESS:
        draft.currentMovie = action.currentMovie;
        draft.loading = false;
        draft.error = false;
        break;

      case GET_CURRENT_MOVIE_ERROR:
      case EDIT_CURRENT_MOVIE_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
      case EDIT_CURRENT_MOVIE_SUCCESS:
        draft.currentMovie = action.currentMovie;
        window.open("/moviesList", "_self");
        break

      default:
        break;
    }
  });

export default editCurrentMoviePageReducer;
