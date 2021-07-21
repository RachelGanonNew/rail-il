
import produce from 'immer';
import { IS_EXIST_USER_SUCCESS, IS_EXIST_USER_ERROR } from './constants';

export const initialState = {
  user: true,
  error: false
};

const loginPageReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {

      case IS_EXIST_USER_SUCCESS:
        draft.user = false;
        break;
      
      case IS_EXIST_USER_ERROR:
        draft.error = action.error ;
        break;

      default:
        break;
    }
  });

export default loginPageReducer;
