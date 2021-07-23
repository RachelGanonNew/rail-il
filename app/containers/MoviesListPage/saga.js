import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_MOVIES } from './constants';
import { movieLoaded, movieLoadingError } from './actions';
 import { API_URL } from '../../Common/consts';

const baseUrl = "/api";


export function* getMovies() {
  const requestURL = `${baseUrl}/movies/list`;
  // const requestURL = `${API_URL}`;
  try {
    const list = yield call(request, requestURL);
    yield put(movieLoaded(list));
  } catch (err) {
    yield put(movieLoadingError(err));
  }
}
export default function* loadMoviesData() {
  yield (LOAD_MOVIES, getMovies());
}