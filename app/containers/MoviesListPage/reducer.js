import produce from 'immer';

import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR } from './constants';

export const initialState = {
  list: false,
  loading: false,
  error: false,
};

const MoviesListReducer = (state = initialState, action) => 
  produce(state, ( draft ) => {
    switch (action.type) {

      case LOAD_MOVIES:
        draft.loading = true;
        draft.error = true;
        draft.list = false;
        break;

      case LOAD_MOVIES_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.list = action.list;
        break;

      case LOAD_MOVIES_ERROR:
        draft.loading = false;
        draft.error = true;
        break;

      default:
        break;
    }
  });

export default MoviesListReducer;