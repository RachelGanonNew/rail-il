
import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR } from './constants';

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