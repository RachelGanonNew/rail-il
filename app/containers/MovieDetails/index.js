import React, { memo, useEffect, useState } from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import reducer from './reducer';
import saga from './saga';
import { editCurrentMovie, getCurrentMovie } from './actions';
import { makeSelectMovieDetails, makeSelectError, makeSelectLoading} from './selectors';


export function DetailsMoviePage(props) {
  useInjectReducer({ key: 'detailsMoviePage', reducer });
  useInjectSaga({ key: 'detailsMoviePage', saga });

  
  const [redirect,setRedirect] = useState();
  const {id} = props.match.params;
  useEffect(() => {
    
    if(props.currentMovie === undefined || props.currentMovie.id === 0) 
      props.onLoadCurrentMovie(id);
  });
  const handleEdit = () => {
    setRedirect(`/edit/${id}`);
  }
  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <>
        <Button variant="primary" onClick={handleEdit}>EDIT</Button>{' '}
    </>
  );
}
DetailsMoviePage.propTypes = {
  onLoadCurrentMovie: PropTypes.any,
  submitEditCurrentMovie: PropTypes.func,
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  id: PropTypes.number,
  currentMovie:PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  match:PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
  

const mapStateToProps = createStructuredSelector({
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
  currentMovie:makeSelectMovieDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadCurrentMovie: (id) => {dispatch(getCurrentMovie(id))},
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
)(DetailsMoviePage);


