import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_NEW_MOVIE_ID, ADD_NEW_MOVIE } from './constants';
import { getNewMovieIdSuccess, getNewMovieIdError, addNewMovieSuccess, addNewMovieError } from './actions';

const baseUrl = "/api";

export function* getNewMovieId(){
  const requestURL = `${baseUrl}/getNewMovieId`;
  try{
    const newId = yield call(request, requestURL);
    yield put(getNewMovieIdSuccess(newId));
  }
  catch(err){
    yield put(getNewMovieIdError(err));
  }
};

export function* addNewMovie(action){

  const requestURL = `${baseUrl}/add`;
  const data = {
    name: action.newMovie.name,
    year: action.newMovie.year,
    image: action.newMovie.image,
    director: action.newMovie.director,
    category: action.newMovie.category,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  };
  try{
    const newList = yield call(request, requestURL, options);
    yield put(addNewMovieSuccess(newList));
    
  }
  catch(err){
    addNewMovieError();
  
  }
}
export default function* getNewMovieIdSaga() {
  yield takeEvery(GET_NEW_MOVIE_ID, getNewMovieId);
  yield takeEvery (ADD_NEW_MOVIE, addNewMovie);
}
