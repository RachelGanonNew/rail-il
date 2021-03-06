import React,{ useState } from 'react';
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types';
import './movieCard.scss';
import { history } from '../../utils/history';
export default function MovieCard({item}) {
  const clickCard = () => {
    history.push(`/details/${item.id}`);
  }
  return (
        <>
            <Card onClick={clickCard} className="card">
              <Card.Img variant="top" src={item.Poster} thumbnail="true" />
              <Card.Body>
                <Card.Title>
                  Title
                </Card.Title>
                <Card.Text>
                  {item.Title}
                </Card.Text>
              </Card.Body>
            </Card>
        </>
  )
}
MovieCard.propTypes = {
  item:PropTypes.oneOfType([PropTypes.object,PropTypes.bool])
};
  