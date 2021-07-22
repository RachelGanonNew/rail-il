import React, { memo, useEffect, useState } from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { connect } from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import { addNewMovie, getNewMovieId } from './actions';
import messages from './messages';
import './MoviesList.scss';
import { makeSelectNewMovieIdError, makeSelectNewMovieId, makeSelectAddMoviePage} from './selectors';
import AddMovieForm from '../../components/AddMovieForm';
import ErrorBoundary from '../../components/ErrorBoundary';

export function AddMoviePage({ onLoadAddMovie, submitAddNewMovie, error, newId}) {
  useInjectReducer({ key: 'addTrasportaionPage', reducer });
  useInjectSaga({ key: 'addTrasportaionPage', saga });

  const [newMovie,setNewMovie] = useState( {
    id: 0,
    name: '',
    year: '',
    director: '',
    image: '',
    category: ''
  });
  useEffect(() => {
    onLoadAddMovie();
    setNewMovie({
      id: newId,
      name: '',
      year: '',
      director: '',
      image: '',
      category: ''
    })
  });

  return (
    <>
   
      {error && <div className="error">
        <FormattedMessage {...messages.err} />
      </div>}
      <ErrorBoundary>
        <AddMovieForm
          currentMovie={newMovie} parentCallback = {submitAddNewMovie}/>
      </ErrorBoundary>
    </>
  );
}
AddMoviePage.propTypes = {
  onLoadAddMovie: PropTypes.func,
  submitAddNewMovie: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  newId: PropTypes.number,
};
  

const mapStateToProps = createStructuredSelector({
  addMoviePage: makeSelectAddMoviePage(),
  error: makeSelectNewMovieIdError(),
  newId: makeSelectNewMovieId(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadAddMovie: () =>dispatch(getNewMovieId()),
    submitAddNewMovie: (newMovie) => dispatch(addNewMovie(newMovie)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddMoviePage);


