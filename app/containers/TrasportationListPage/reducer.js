import produce from 'immer';

import { LOAD_TRANSPORTATIONS, LOAD_TRANSPORTATIONS_SUCCESS, LOAD_TRANSPORTATIONS_ERROR } from './constants';

export const initialState = {
  list: false,
  loading: false,
  error: false,
};

const transportationsListReducer = (state = initialState, action) => 
  produce(state, ( draft ) => {
    switch (action.type) {

      case LOAD_TRANSPORTATIONS:
        draft.loading = true;
        draft.error = true;
        draft.list = false;
        break;

      case LOAD_TRANSPORTATIONS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.list = action.transportations;
        break;

      case LOAD_TRANSPORTATIONS_ERROR:
        draft.loading = false;
        draft.error = true;
        break;

      default:
        break;
    }
  });

export default transportationsListReducer;