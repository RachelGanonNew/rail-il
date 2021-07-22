import { 
  GET_CURRENT_MOVIE,
  GET_CURRENT_MOVIE_SUCCESS,
  GET_CURRENT_MOVIE_ERROR,

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
    
   