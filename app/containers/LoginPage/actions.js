
import { IS_EXIST_USER, IS_EXIST_USER_SUCCESS, IS_EXIST_USER_ERROR } from './constants';

export function getIsExistUser(pass) {
  return {
    type: IS_EXIST_USER,
    pass,
  };
}

export function getIsExistUserSuccess() {
  return {
    type: IS_EXIST_USER_SUCCESS,
  };
}

export function getIsExistUserError(error) {
  return {
    type: IS_EXIST_USER_ERROR,
    error
  };
}

