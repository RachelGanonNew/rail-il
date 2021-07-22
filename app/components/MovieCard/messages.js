/*
 * MovieCard Messages
 *
 * This contains all the text for the MovieCard container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.MovieCard';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'This is the MovieCard title!',
  },
  txt: {
    id: `${scope}.txt`,
    defaultMessage: 'This is the MovieCard txt!',
  },
});