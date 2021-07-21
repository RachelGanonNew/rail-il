import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import AddTransportationForm from '../../components/AddTransportationForm';
import ErrorBoundary from '../../components/ErrorBoundary';
import { addNewTransportation, getNewTransportationId } from './actions';
import Header from '../../components/Header';
import reducer from './reducer';
import saga from './saga';
import { makeSelectNewTrasportationIdError, makeSelectNewTrasportationId, makeSelectAddTrasportaionPage} from './selectors';

export function AddTrasportaionPage({onLoadAddTransportation, submitAddNewTransportation, error, newId,}) 
{

  useInjectReducer({ key: 'addTrasportaionPage', reducer });
  useInjectSaga({ key: 'addTrasportaionPage', saga });

  const stransportationFormRef =  React.createRef();

  useEffect(() => {
    onLoadAddTransportation();
    // check ref
    const form = stransportationFormRef.current;
    console.log(form.state);
  });

  return (
    <>
      <Header/>
      {error && <div className="error">Opps, Something went wrong, please try again later</div>}
      <ErrorBoundary>
        <AddTransportationForm newId={newId} submitAddNewTransportation={submitAddNewTransportation} ref={stransportationFormRef} />
      </ErrorBoundary>
    </>
  );
}

AddTrasportaionPage.propTypes = {
  onLoadAddTransportation: PropTypes.func,
  submitAddNewTransportation: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  newId: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  addTrasportaionPage: makeSelectAddTrasportaionPage(),
  error: makeSelectNewTrasportationIdError(),
  newId: makeSelectNewTrasportationId(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadAddTransportation: () =>dispatch(getNewTransportationId()),
    submitAddNewTransportation: (newTransportation) => dispatch(addNewTransportation(newTransportation)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddTrasportaionPage);
