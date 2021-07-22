import produce from 'immer';
import {
  GET_CURRENT_MOVIE, GET_CURRENT_MOVIE_ERROR, GET_CURRENT_MOVIE_SUCCESS
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

const getCurrentMoviePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      
      case GET_CURRENT_MOVIE:
        draft.loading = true;
        draft.error = true;
        break;

      case GET_CURRENT_MOVIE_SUCCESS:
        draft.currentMovie = action.currentMovie;
        draft.loading = false;
        draft.error = false;
        break;

      case GET_CURRENT_MOVIE_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
      default:
        break;
    }
  });

export default getCurrentMoviePageReducer;
