import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddTrasportaionPageDomain = state => state.addTrasportaionPage || initialState;

const makeSelectAddTrasportaionPage = () =>
  createSelector(
    selectAddTrasportaionPageDomain,
    substate => substate,
  );

const makeSelectNewTrasportationIdError = () =>
  createSelector(
    selectAddTrasportaionPageDomain,
    addTrasportaionPage => addTrasportaionPage.newTransportation.error,
  );

const makeSelectNewTrasportationId = () =>
  createSelector(
    selectAddTrasportaionPageDomain,
    addTrasportaionPage => addTrasportaionPage.newTransportation.id,
  );

export {
  makeSelectAddTrasportaionPage,
  makeSelectNewTrasportationId,
  makeSelectNewTrasportationIdError,
};
export { selectAddTrasportaionPageDomain };

