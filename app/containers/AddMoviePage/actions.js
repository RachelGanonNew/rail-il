import { 
  GET_NEW_MOVIE_ID, 
  GET_NEW_MOVIE_ID_SUCCESS, 
  GET_NEW_MOVIE_ID_ERROR, 
  ADD_NEW_MOVIE,
  ADD_NEW_MOVIE_SUCCESS, 
  ADD_NEW_MOVIE_ERROR,

} from './constants';


export function getNewMovieId(){
  return {
    type: GET_NEW_MOVIE_ID,
  };
};


export function getNewMovieIdSuccess(newId){
  return {
    type: GET_NEW_MOVIE_ID_SUCCESS,   
    newId 
  };
};

export function getNewMovieIdError(error){
  return {
    type: GET_NEW_MOVIE_ID_ERROR,   
    error 
  };
};


export function addNewMovie(newMovie){
  return {
    type: ADD_NEW_MOVIE,   
    newMovie 
  };
};

export function addNewMovieSuccess(newMovie){
  return {
    type: ADD_NEW_MOVIE_SUCCESS,   
    newMovie 
  };
};

export function addNewMovieError(){
  return {
    type: ADD_NEW_MOVIE_ERROR,
  };
};
