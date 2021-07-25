import produce from 'immer';

import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR, 
  UPDATE_LIST, UPDATE_LIST_SUCCESS, UPDATE_LIST_ERROR } from './constants';

export const initialState = {
  list: false,
  loading: false,
  error: false,
};

const MoviesListReducer = (state = initialState, action) => 
  produce(state, ( draft ) => {
    switch (action.type) {

      case LOAD_MOVIES:
      case  UPDATE_LIST:
        draft.loading = true;
        draft.error = true;
        draft.list = false;
        break;

      case LOAD_MOVIES_SUCCESS:
      case UPDATE_LIST_SUCCESS:
        debugger
        draft.loading = false;
        draft.error = false;
        draft.list = action.list;
        break;
  
      case LOAD_MOVIES_ERROR:
      case  UPDATE_LIST_ERROR:
        draft.loading = false;
        draft.error = true;
        break;

      default:
        break;
    }
  });

export default MoviesListReducer;