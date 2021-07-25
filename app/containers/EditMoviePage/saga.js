import {  put, takeEvery, select } from 'redux-saga/effects';

import { GET_CURRENT_MOVIE, EDIT_CURRENT_MOVIE } from './constants';
// import { UPDATE_LIST } from '../MoviesListPage/constants';
import { updateListError, updateListSuccess } from '../MoviesListPage/actions';
import {
  getCurrentMovieSuccess, getCurrentMovieError,
  editCurrentMovieError, editCurrentMovieSuccess,
} from './actions';

import * as selectors from '../MoviesListPage/selectors';

export function* getCurrentMovie(action) {
  const currentList = yield select(selectors.makeSelectMoviesList());
  if (currentList !== false) {
    try {
      const current = _getItem(currentList, action.id);
      yield put(getCurrentMovieSuccess(current));
    }
    catch (err) {
      yield put(getCurrentMovieError(err));
    }
  }
};

export function* editCurrentMovie(action) {
  const currentList = yield select(selectors.makeSelectMoviesList());
  if (currentList !== false) {
    try {
      const newList = _updateItem(currentList, action.currentMovie);  
      yield put(updateListSuccess(newList));
      yield put(editCurrentMovieSuccess(action.currentMovie));

    }
    catch (err) {
      yield put(editCurrentMovieError());
      yield put(updateListError());

    }
  }
}



export default function* getNewMovieIdSaga() {
  yield takeEvery(GET_CURRENT_MOVIE, getCurrentMovie);
  yield takeEvery(EDIT_CURRENT_MOVIE, editCurrentMovie);
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
