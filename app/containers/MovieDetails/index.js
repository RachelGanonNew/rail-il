import React, { memo, useEffect, useState } from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import ReactStarsRating from 'react-awesome-stars-rating';
import reducer from './reducer';
import saga from './saga';
import { history } from '../../utils/history';
import { getCurrentMovie, ratingCurrentMovie } from './actions';
import { makeSelectMovieDetails, makeSelectError, makeSelectLoading, makeSelectRated } from './selectors';
import './details.scss';
import Header from '../../components/Header';
export function DetailsMoviePage(props) {

  useInjectReducer({ key: 'detailsMoviePage', reducer });
  useInjectSaga({ key: 'detailsMoviePage', saga });

  const [rating, setRating] = useState();
  const { id } = props.match.params;

  const onChange = (value) => {
    setRating(value);
    props.currentMovie.Rated = value;
    props.onRatingCurrentMovie(props.currentMovie);
  };
  
  const ReactStars = ({ value }) => {
    return <ReactStarsRating onChange={onChange} value={props.currentMovie.Rated} isHalf={false} />;
  };
  useEffect(() => {

    if (props.currentMovie === undefined || props.currentMovie.id === 0)
      props.onLoadCurrentMovie(id);
  });
  const handleEdit = () => {
    history.push(`/edit/${id}`);
  }

  return (
    <>
    <Header></Header>
      {props.currentMovie.id !== 0 &&
        <>
        <div className="warpperDetails">
          <Button variant="primary" onClick={handleEdit}>EDIT</Button>{' '}
          <Card >
            <Card.Img  src={props.currentMovie.Poster} fluid="true" />
            <Card.Body>
              <ReactStars  />
              <Card.Text>
                {props.currentMovie.Year}
              </Card.Text>
              <Card.Title>
                {props.currentMovie.Title}
              </Card.Title>
              <Card.Text>
                {props.currentMovie.Plot}
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        </>
      }
    </>
  );
}
DetailsMoviePage.propTypes = {
  onLoadCurrentMovie: PropTypes.any,
  submitEditCurrentMovie: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  id: PropTypes.number,
  currentMovie: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  match: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onRatingCurrentMovie:PropTypes.any,
  rated:PropTypes.any,
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  currentMovie: makeSelectMovieDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadCurrentMovie: (id) => dispatch(getCurrentMovie(id)),
    onRatingCurrentMovie: (currentMovie) => dispatch(ratingCurrentMovie(currentMovie))
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


