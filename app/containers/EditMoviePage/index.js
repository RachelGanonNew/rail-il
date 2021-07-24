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
import { makeSelectCurrentMovieError,  makeSelectCurrentMovie } from './selectors';
import AddMovieForm from '../../components/AddMovieForm';
import ErrorBoundary from '../../components/ErrorBoundary';
import messages from './messages';
import {POP} from '../../Common/consts';
import {history } from '../../utils/history';
export function EditMoviePage(props) {
  
  useInjectReducer({ key: 'editMoviePage', reducer });
  useInjectSaga({ key: 'editMoviePage', saga });

  const { id } = props.match.params;
  useEffect(() => {
    if (props.currentMovie === undefined || props.currentMovie.id === 0)
      props.onLoadCurrentMovie(id);
  });
  // if(props.history.action === POP){
  //   history.push(`/details/${id}`)
  // }
  // else 
    return (
    <>
      {props.error && <div className="error"><FormattedMessage {...messages.err} /></div>}
      <ErrorBoundary>
        {props.currentMovie.id !== 0 &&
         <AddMovieForm
           currentMovie={props.currentMovie} 
           parentCallback={props.submitEditCurrentMovie} />}
      </ErrorBoundary>
    </>
    );
}

EditMoviePage.propTypes = {
  onLoadCurrentMovie: PropTypes.any,
  submitEditCurrentMovie: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  id: PropTypes.number,
  currentMovie: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  match: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};


const mapStateToProps = createStructuredSelector({
  error: makeSelectCurrentMovieError(),
  currentMovie:  makeSelectCurrentMovie(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadCurrentMovie: (id) =>{dispatch(getCurrentMovie(id))},
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


