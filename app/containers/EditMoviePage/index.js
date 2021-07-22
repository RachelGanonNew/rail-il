import React, { memo, useEffect } from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { connect } from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import { editCurrentMovie, getCurrentMovie } from './actions';
import { makeSelectCurrentMovieError, makeSelectCurrentMovie} from './selectors';
import AddMovieForm from '../../components/AddMovieForm';
import ErrorBoundary from '../../components/ErrorBoundary';
import messages from './messages';

export function EditMoviePage(props,{ onLoadCurrentMovie, submitEditCurrentMovie, error, currentMovie}) {
  useInjectReducer({ key: 'editMoviePage', reducer });
  useInjectSaga({ key: 'editMoviePage', saga });
  const {id} = props.match.params;
  console.log("EditMoviePage",id);

  useEffect(() => {
    onLoadCurrentMovie(id);
  });

  return (
    <>
   
      {error && <div className="error">
        <FormattedMessage {...messages.err} /></div>}
      <ErrorBoundary>
        <AddMovieForm
          currentMovie={currentMovie} parentCallback = {submitEditCurrentMovie}/>
      </ErrorBoundary>
    </>
  );
}
EditMoviePage.propTypes = {
  onLoadCurrentMovie: PropTypes.func,
  submitEditCurrentMovie: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  id: PropTypes.number,
  currentMovie:PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  match:PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
  

const mapStateToProps = createStructuredSelector({
  error: makeSelectCurrentMovieError(),
  currentMovie:  makeSelectCurrentMovie(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadCurrentMovie: (id) =>dispatch(getCurrentMovie(id)),
    submitEditCurrentMovie: (newMovie) => dispatch(editCurrentMovie(newMovie)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EditMoviePage);


