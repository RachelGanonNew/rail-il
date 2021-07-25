
import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR,
UPDATE_LIST, UPDATE_LIST_ERROR, UPDATE_LIST_SUCCESS } from './constants';

export function loadMovies() {
  return {
    type: LOAD_MOVIES,
  };
}

export function movieLoaded(list) {
  return {
    type: LOAD_MOVIES_SUCCESS,
    list,
  };
}

export function movieLoadingError(error) {
  return {
    type: LOAD_MOVIES_ERROR,
    error,
  };
}


export function updateList(list){
  return {
    type: UPDATE_LIST,   
    list 
  };
};
  
export function updateListSuccess(list){
  return {
    type: UPDATE_LIST_SUCCESS,   
    list 
  };
};
  
export function updateListError(error){
  return {
    type: UPDATE_LIST_ERROR,
    error
  };
};
  