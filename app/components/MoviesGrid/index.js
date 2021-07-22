import React from 'react';
import PropTypes from 'prop-types';
import CardGroup from 'react-bootstrap/CardGroup'
import MovieCard from '../MovieCard/index';
export default function MoviesGrid({list}){

  return(
        <>
        <CardGroup>
          {list && list.map(item=>
            <MovieCard 
              item={item}
            ></MovieCard>
          )}
        </CardGroup>
        </>
  )
}
MoviesGrid.propTypes = {
  list: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};
