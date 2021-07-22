import React from 'react';
import { FormattedMessage } from 'react-intl';
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types';
import messages from './messages';

export default function MovieCard({title, txt, imgSrc}) {
  return (
        <>
            <Card>
              <Card.Img variant="top" src={imgSrc} />
              <Card.Body>
                <Card.Title>
                  <FormattedMessage title={title} {...messages.title} />
                </Card.Title>
                <Card.Text>
                  <FormattedMessage txt={txt}{...messages.txt} />
                </Card.Text>
              </Card.Body>
            </Card>
        </>
  )
}
MovieCard.propTypes = {
  title: PropTypes.string,
  txt: PropTypes.string,
  imgSrc: PropTypes.string,
};
  