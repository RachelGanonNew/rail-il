import { call, put, takeEvery, select } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_CURRENT_MOVIE, EDIT_CURRENT_MOVIE } from './constants';
import { getCurrentMovieSuccess, getCurrentMovieError, editCurrentMovieError, editCurrentMovieSuccess } from './actions';

import * as selectors from '../MoviesListPage/selectors';

export function* getCurrentMovie(action){
  const currentList = yield select(selectors.makeSelectMoviesList());
  if(currentList !== false){
    try{
      const current = _getItem(currentList,action.id);
      yield put(getCurrentMovieSuccess(current));
    }
    catch(err){
      yield put(getCurrentMovieError(err));
    }
  }
};

export function* editCurrentMovie(action){
  debugger
  const currentList = yield select(selectors.makeSelectMoviesList());
  if(currentList !== false){
    try{
      const newList = _updateItem(currentList,action.currentMovie);
      yield put(editCurrentMovieSuccess(newList));  
    }
    catch(err){
      yield put(editCurrentMovieError()); 
    }
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

const _getItem = (list, id) => {
  const currentItem = list.find(item => item.id.toString() === id.toString());
  return currentItem;
};

const _updateItem = (list, updatedItem) => {
  const newList = [...list];
  const currentItemIndex = newList.findIndex(
    item => item.id.toString() === updatedItem.id.toString(),
  );
  newList[currentItemIndex] = updatedItem;
  return newList;
};
