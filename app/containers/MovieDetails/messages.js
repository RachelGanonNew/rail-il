
import { defineMessages } from 'react-intl';

export const scope = 'app.components.MoviesGridPage';

export default defineMessages({
  loading: {
    id: `${scope}.loading`,
    defaultMessage: 'loading...',
  },
  err: {
    id: `${scope}.err`,
    defaultMessage: 'error accured',
  },
});