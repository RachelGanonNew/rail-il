import React,{ useState } from 'react';
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default function MovieCard({item}) {
  const [redirect, setRedirect] = useState()
  const clickCard = () => {
    setRedirect(`/details/${item.id}`);
  }
  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
        <>
            <Card onClick={clickCard}>
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
  