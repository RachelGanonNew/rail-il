import React, {useEffect, memo, useState} from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Header from '../../components/Header'
import TransportationTable from '../../components/TtransportationTable'
import {loadTransportations} from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectTrasportationsList, makeSelectLoading, makeSelectError } from './selectors'

export function TrasportationListPage( {transportaionList, loading, error, onLoadTransportations }) {

  useInjectReducer({ key: 'trasportationListPage', reducer });
  useInjectSaga({ key: 'trasportationListPage', saga });

  useEffect( ()=> {
    if( !transportaionList ) onLoadTransportations();
  }, []);

  return (
    <div>
      <Header/>
      {loading && <div className="loading">loading...</div>}
      {error && <div className="error">error accured</div>}
      <TransportationTable list = {transportaionList}/>
    </div>
  );
}

TrasportationListPage.propTypes = {
  transportaionList: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadTransportations: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  transportaionList: makeSelectTrasportationsList(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadTransportations: () => dispatch(loadTransportations()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TrasportationListPage);
