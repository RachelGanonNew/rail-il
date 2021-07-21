import { createSelector } from 'reselect';

const selectRouter = state => state.router;
// const selectGlobal = state => state.global.transportationsList;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

// const makeSelectTrasportationsList = () =>
//   createSelector(
//     selectGlobal,
//     global => global.transportationsList,
//   );

// const makeSelectLoading = () =>
//   createSelector(
//     selectGlobal,
//     global.loading,
//   );

// const makeSelectError = () => 
//   createSelector(
//     selectGlobal,
//     global.error,
//   );

export { 
  makeSelectLocation,
  // makeSelectTrasportationsList,
  // makeSelectLoading,
  // makeSelectError,
};
