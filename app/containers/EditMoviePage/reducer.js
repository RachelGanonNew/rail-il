import produce from 'immer';
import {
  DEFAULT_ACTION, GET_CURRENT_MOVIE, GET_CURRENT_MOVIE_ERROR, GET_CURRENT_MOVIE_SUCCESS,
  EDIT_CURRENT_MOVIE, EDIT_CURRENT_MOVIE_ERROR, EDIT_CURRENT_MOVIE_SUCCESS
} from './constants';
export const initialState = {
  currentMovie: {
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

      case GET_CURRENT_MOVIE:
      case EDIT_CURRENT_MOVIE:
        draft.currentMovie.error = false;
        break;

      case GET_CURRENT_MOVIE_SUCCESS:
        draft.currentMovie = action.currentMovie;
        draft.currentMovie.error = false;
        break;

      case GET_CURRENT_MOVIE_ERROR:
      case EDIT_CURRENT_MOVIE_ERROR:
        draft.currentMovie =  {
          error: false,
          id: 0,
          name: '',
          year: '',
          director: '',
          image: '',
          category: ''
        
        }  
        break;
      case EDIT_CURRENT_MOVIE_SUCCESS:      
        draft.currentMovie = action.currentMovie;
        window.open("/moviesList", "_self");
        break

      default:
        break;
    }
  });

export default addMoviesPageReducer;
