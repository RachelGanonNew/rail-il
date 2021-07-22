import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_CURRENT_MOVIE, EDIT_CURRENT_MOVIE } from './constants';
import { getCurrentMovieSuccess, getCurrentMovieError, editCurrentMovieError, editCurrentMovieSuccess } from './actions';

const baseUrl = "/api";

export function* getCurrentMovie(action){

  const requestURL = `${baseUrl}/getCurrentMovie/${action.id}`;
  try{
    const current = yield call(request, requestURL);

    yield put(getCurrentMovieSuccess(current));
  }
  catch(err){
    yield put(getCurrentMovieError(err));
  }
};

export function* editCurrentMovie(action){
   
  const requestURL = `${baseUrl}/update`;
  const data = action.currentMovie;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  };
  try{
    const newList = yield call(request, requestURL, options);
    yield put(editCurrentMovieSuccess(newList));  
  }
  catch(err){
    editCurrentMovieError();
  }
}


const InitData = (movie) =>{
  const currentMovie = {
    Director: movie.Director,
    Genre:movie.Genre,
    Plot: movie.Plot,
    Poster:movie.Poster,
    Rated: movie.Rated,
    Title: movie.Title,
    Year: movie.Year,
    id: movie.id,
  }
  return currentMovie;
}
export default function* getNewMovieIdSaga() {
  yield takeEvery(GET_CURRENT_MOVIE, getCurrentMovie);
  yield takeEvery (EDIT_CURRENT_MOVIE, editCurrentMovie);
}
