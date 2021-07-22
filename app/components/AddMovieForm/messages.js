/*
 * AddMovieForm Messages
 *
 * This contains all the text for the AddMovieForm container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.AddMovieForm';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Movie Name:',
  },
  director: {
    id: `${scope}.director`,
    defaultMessage: 'Movie Director:',
  },
  img: {
    id: `${scope}.img`,
    defaultMessage: 'Upload Movie Image:',
  },
  trailer: {
    id: `${scope}.trailer`,
    defaultMessage: 'Upload Movie Trailer:',
  },
  year: {
    id: `${scope}.year`,
    defaultMessage: 'Movie Created Year:',
  },
  category: {
    id: `${scope}.category`,
    defaultMessage: 'Movie Category:',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Submit',
  },
});