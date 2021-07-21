import {  call, put, takeEvery  } from 'redux-saga/effects';
import request from 'utils/request';

import {IS_EXIST_USER} from './constants'
import { getIsExistUserSuccess, getIsExistUserError } from './actions';

const baseUrl = "/api";

export function* getIsExistUser(action){
  const data = {pass : action.pass};
  const requestURL = `${baseUrl}/getExistUser`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  };
  try{
    const user = yield call(request, requestURL, options);
    if(user) {
      localStorage.setItem('userName', JSON.stringify(user.name));
      window.open("/transportaionList", "_self");
    }
    else {
      yield put(getIsExistUserSuccess());
    }
    
  }
  catch(error){
    getIsExistUserError(error);
  }
}

export default function* getIsExistUserSaga(){
  yield takeEvery (IS_EXIST_USER, getIsExistUser );
};
