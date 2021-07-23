import React,{ useState } from 'react';
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './movieCard.scss';
export default function MovieCard({item}) {
  const [redirect, setRedirect] = useState()
  const clickCard = () => {
    setRedirect(`/details/${item.id}`);
  }
  if (redirect) {
    return <Redirect push  to={redirect} />;
  }
  return (
        <>
            <Card onClick={clickCard} className="card">
              <Card.Img variant="top" src={item.Poster} thumbnail="true" />
              <Card.Body>
                <Card.Title>
                  {item.Title}
                  {/* <FormattedMessage title={item.Title} {...messages.title} /> */}
                </Card.Title>
                <Card.Text>
                  {item.Plot}
                  {/* <FormattedMessage txt={item.Plot}{...messages.txt} /> */}
                </Card.Text>
              </Card.Body>
            </Card>
        </>
  )
}
MovieCard.propTypes = {
  item:PropTypes.oneOfType([PropTypes.object,PropTypes.bool])
};
  