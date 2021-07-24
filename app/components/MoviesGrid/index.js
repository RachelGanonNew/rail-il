import React from 'react';
import PropTypes from 'prop-types';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container'
import MovieCard from '../MovieCard/index';
import './moviesGrid.scss';
import { Col, Row } from 'react-bootstrap';
export default function MoviesGrid({list}){

  return(
        <>
        <Container fluid>
          
          <CardGroup className="Grid">
            {list && list.map(item=>
              <MovieCard 
                item={item}
                key={item.id}
              ></MovieCard>
            )}
          </CardGroup>

        </Container>
        </>
  )
}
MoviesGrid.propTypes = {
  list: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};
