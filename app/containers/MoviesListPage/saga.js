import { call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_MOVIES } from './constants';
import { movieLoaded, movieLoadingError } from './actions';
import { API_URL } from '../../Common/consts';
import * as selectors from './selectors';

// const baseUrl = "/api";


export function* getMovies() {
  const requestURL = `${API_URL}`;
  const currentList = yield select(selectors.makeSelectMoviesList());
  if(currentList === false)
  {
    try {
      const list = yield call(request, requestURL);
      const res = initList(list);
      yield  put(movieLoaded(res));
      
    } catch (err) {
      yield put(movieLoadingError(err));
    }
  }
}
export default function* loadMoviesData() {
  yield (LOAD_MOVIES, getMovies());
}

const initList = (list) => {
  const res = [];
  let i = 0;
  while(i<6){
    const currentMovie = {
      Director: list.Director,
      Genre: list.Genre,
      Plot: list.Plot,
      Poster: list.Poster,
      Rated: 0,
      Title: list.Title,
      Writer: list.Writer,
      Year: list.Year,
      id: i+1
    }
    res[i] = currentMovie;
    i +=1;
  }
  return res;
}