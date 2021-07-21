import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLoginPageDomain = state => state.loginPage || initialState;

const makeSelectIsExistUser = () =>
  createSelector(
    selectLoginPageDomain,
    loginPage => loginPage.user,
  );

export { selectLoginPageDomain, makeSelectIsExistUser };
