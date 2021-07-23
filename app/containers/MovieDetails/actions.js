import {
  GET_CURRENT_MOVIE,
  GET_CURRENT_MOVIE_SUCCESS,
  GET_CURRENT_MOVIE_ERROR,
  RATING_CURRENT_MOVIE,
  RATING_CURRENT_MOVIE_ERROR,
  RATING_CURRENT_MOVIE_SUCCESS
} from './constants';


export function getCurrentMovie(id) {
  return {
    type: GET_CURRENT_MOVIE,
    id,
  };
};


export function getCurrentMovieSuccess(currentMovie) {
  return {
    type: GET_CURRENT_MOVIE_SUCCESS,
    currentMovie
  };
};

export function getCurrentMovieError(error) {
  return {
    type: GET_CURRENT_MOVIE_ERROR,
    error
  };
};



export function ratingCurrentMovie(currentMovie,rating) {
  return {
    type: RATING_CURRENT_MOVIE,
    currentMovie, rating
  };
};


export function ratingCurrentMovieSuccess(currentMovie) {
  return {
    type:  RATING_CURRENT_MOVIE_SUCCESS,
    currentMovie
  };
};

export function ratingCurrentMovieError(error) {
  return {
    type: RATING_CURRENT_MOVIE_ERROR,
    error
  };
};


