import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_MOVIES } from './constants';
import { movieLoaded, movieLoadingError } from './actions';
import { API_URL } from '../../Common/consts';

// const baseUrl = "/api";


export function* getMovies() {
  // const requestURL = `${baseUrl}/movies/list`;
  const requestURL = `${API_URL}`;
  try {
    const list = yield call(request, requestURL);
    const res = initList(list);
    yield  put(movieLoaded(res));
  } catch (err) {
    yield put(movieLoadingError(err));
  }
}
export default function* loadMoviesData() {
  yield (LOAD_MOVIES, getMovies());
}

const initList = (list) => {
  console.log('list in init',list);
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