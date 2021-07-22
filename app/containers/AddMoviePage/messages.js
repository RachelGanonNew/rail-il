/*
 * AddMoviePage Messages
 *
 * This contains all the text for the AddMoviePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AddMoviePage';

export default defineMessages({
  err: {
    id: `${scope}.err`,
    defaultMessage: 'Opps, Something went wrong, please try again later',
  },
});