import React, { useEffect, memo, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
// import Header from '../../components/Header';
import MoviesGrid from '../../components/MoviesGrid';
import { loadMovies } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectMoviesList, makeSelectLoading, makeSelectError } from './selectors'


export function MoviesListPage({ moviesList, loading, error, onLoadMovies }) {
  const [redirect, setRedirect] = useState();
  const handleCreate = () => {
    setRedirect('/create');
  }
  useInjectReducer({ key: 'moviesListPage', reducer });
  useInjectSaga({ key: 'moviesListPage', saga });

  useEffect(() => {
    if (!moviesList) onLoadMovies();
  }, []);
  
  if (redirect)
    return <Redirect to={redirect} />
  return(
    <div>
      {/* <Header /> */}
      <Button variant="primary" onClick={handleCreate}>CREATE</Button>{' '}

      {loading && <div className="loading">loading...</div>}
      {error && <div className="error">error accured</div>}
      <MoviesGrid list={moviesList} />
    </div>
  )
}

MoviesListPage.propTypes = {
  moviesList: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadMovies: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  moviesList: makeSelectMoviesList(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadMovies: () => dispatch(loadMovies()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MoviesListPage);
