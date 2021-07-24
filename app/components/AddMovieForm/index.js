import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { history } from '../../utils/history';
import messages from './messages';
import { CATEGORY, IMAGE, YEAR, TITLE, PLOT, DIRECTOR } from '../../Common/consts';
import './create.scss';
export function AddMovieForm(props) {
  const { currentMovie } = props;

  const [director, setDirector] = useState(currentMovie ? currentMovie.Director : '');
  const [genre, setGenre] = useState(currentMovie ? currentMovie.Genre : '');
  const [plot, setPlot] = useState(currentMovie ? currentMovie.Plot : '');
  const [poster, setPoster] = useState(currentMovie ? currentMovie.Poster : '');
  const [title, setTitle] = useState(currentMovie ? currentMovie.Title : '');
  const [year, setYear] = useState(currentMovie ? currentMovie.Year : '');
  const handleCancel = () => {
    history.goBack();
  }
  const handleSubmit = () => {
    const newMovie = {
      Director: director,
      Genre: genre,
      Plot: plot,
      Poster: poster,
      Title: title,
      Year: year,
      id: currentMovie.id
    };
    props.parentCallback(newMovie);
  }

  const onTitleChange = event => setTitle(event.target.value);
  const onDirectorChange = event => setDirector(event.target.value);
  const onGenreChange = event => setGenre(event.target.value);
  const onPlotChange = event => setPlot(event.target.value);
  const onPosterChange = event => setPoster(event.target.value);
  const onYearChange = event => setYear(event.target.value);
  return (

    <Form className="form">
      <Form.Group className="mb-3" >
        <Form.Control type="text" value={title} onChange={onTitleChange} placeholder={TITLE} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text" value={director} onChange={onDirectorChange} placeholder={DIRECTOR} />
      </Form.Group>

      {/* <Form.Group className="mb-3" >
        <Form.Control type="file" value={poster} onChange={onPosterChange} />
      </Form.Group> */}

      <Form.Group className="mb-3">
        <Form.Control type="text" value={plot} onChange={onPlotChange} placeholder={PLOT} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text" value={year} onChange={onYearChange} placeholder={YEAR} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text" value={genre} onChange={onGenreChange} placeholder={CATEGORY} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        <FormattedMessage {...messages.submit} />
      </Button>
      <Button variant="primary" type="submit" onClick={handleCancel}>
        <FormattedMessage {...messages.cancel} />
      </Button>
    </Form>
  )
}
AddMovieForm.propTypes = {
  parentCallback: PropTypes.func,
  currentMovie: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};


export default (AddMovieForm);
