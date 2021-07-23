import produce from 'immer';
import {
  GET_CURRENT_MOVIE, GET_CURRENT_MOVIE_ERROR, GET_CURRENT_MOVIE_SUCCESS,
  RATING_CURRENT_MOVIE, RATING_CURRENT_MOVIE_ERROR, RATING_CURRENT_MOVIE_SUCCESS
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
  error: false

};

const getCurrentMoviePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {

      case RATING_CURRENT_MOVIE:
      case GET_CURRENT_MOVIE:
        draft.loading = true;
        draft.error = true;
        break;

      case GET_CURRENT_MOVIE_SUCCESS:
        draft.currentMovie = action.currentMovie;
        draft.loading = false;
        draft.error = false;
        break;
      case RATING_CURRENT_MOVIE_SUCCESS:
        
        draft.currentMovie = action.currentMovie;
        break;

      case GET_CURRENT_MOVIE_ERROR:
      case RATING_CURRENT_MOVIE_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
      default:
        break;
    }
  });

export default getCurrentMoviePageReducer;
