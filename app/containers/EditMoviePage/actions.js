import { 
  GET_CURRENT_MOVIE,
  GET_CURRENT_MOVIE_SUCCESS,
  GET_CURRENT_MOVIE_ERROR,
  EDIT_CURRENT_MOVIE,
  EDIT_CURRENT_MOVIE_SUCCESS,
  EDIT_CURRENT_MOVIE_ERROR,

    
} from './constants';
  
  
export function getCurrentMovie(id){
  return {
    type: GET_CURRENT_MOVIE,
    id,
  };
};
  
  
export function getCurrentMovieSuccess(currentMovie){
  return {
    type: GET_CURRENT_MOVIE_SUCCESS,   
    currentMovie 
  };
};
  
export function getCurrentMovieError(error){
  return {
    type: GET_CURRENT_MOVIE_ERROR,   
    error 
  };
};
  
  
export function editCurrentMovie(currentMovie){
  return {
    type: EDIT_CURRENT_MOVIE,   
    currentMovie 
  };
};
  
export function editCurrentMovieSuccess(currentMovie){
  return {
    type: EDIT_CURRENT_MOVIE_SUCCESS,   
    currentMovie 
  };
};
  
export function editCurrentMovieError(error){
  return {
    type: EDIT_CURRENT_MOVIE_ERROR,
    error
  };
};
  

