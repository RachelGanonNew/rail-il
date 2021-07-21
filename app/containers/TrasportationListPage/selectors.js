import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTransportations = state => state.trasportationListPage || initialState;

const makeSelectTrasportationsList = () =>
  createSelector(
    selectTransportations,
    trasportationListPage => trasportationListPage.list ,
  );

const makeSelectLoading = () =>
  createSelector(
    selectTransportations,
    trasportationListPage => trasportationListPage.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectTransportations,
    trasportationListPage => trasportationListPage.error,
  );

export{
  makeSelectTrasportationsList,
  makeSelectLoading,
  makeSelectError,
};