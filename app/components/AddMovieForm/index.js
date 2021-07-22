import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { CATEGORY, IMAGE, YEAR, NAME, DIRECTOR} from '../../Common/consts';

export function AddMovieForm(props) {
  const [newMovie,setNewMovie] = useState({
    Director:props.currentMovie.Director,
    Genre: props.currentMovie.Genre,
    Plot: props.currentMovie.Plot,
    Poster: props.currentMovie.Poster,
    Title: props.currentMovie.Title,
    Year: props.currentMovie.Year,

    // name: props.currentMovie?props.currentMovie.name:'',
    // year:props.currentMovie?props.currentMovie.year:'',
    // director: props.currentMovie?props.currentMovie.director:'',
    // image: props.currentMovie?props.currentMovie.image:'',
    // category: props.currentMovie?props.currentMovie.category:''
  })
  
  const handleSubmit = () =>{
    props.parentCallback(newMovie);
  }
  const onNameChange = (event) => setNewMovie({ Director:props.currentMovie.Director,
    Genre: props.currentMovie.Genre,
    Plot: props.currentMovie.Plot,
    Poster: props.currentMovie.Poster,
    Title: event.target.value,
    Year: props.currentMovie.Year,
  });
  const onDirectorChange = (event) => setNewMovie({ Director:event.target.value,
    Genre: props.currentMovie.Genre,
    Plot: props.currentMovie.Plot,
    Poster: props.currentMovie.Poster,
    Title: props.currentMovie.Title,
    Year: props.currentMovie.Year,
  });
  const onImgChange = (event) => setNewMovie({ Director:props.currentMovie.Director,
    Genre: props.currentMovie.Genre,
    Plot: props.currentMovie.Plot,
    Poster: event.target.value,
    Title: props.currentMovie.Title,
    Year: props.currentMovie.Year,
  });
  const onYearChange = (event) => setNewMovie({ Director:props.currentMovie.Director,
    Genre: props.currentMovie.Genre,
    Plot: props.currentMovie.Plot,
    Poster: props.currentMovie.Poster,
    Title: props.currentMovie.Title,
    Year: event.target.value
  });
  const onCategoryChange = (event) => setNewMovie({ Director:props.currentMovie.Director,
    Genre: event.target.value,
    Plot: props.currentMovie.Plot,
    Poster: props.currentMovie.Poster,
    Title: props.currentMovie.Title,
    Year: props.currentMovie.Year,
  });

  return (

    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>  
          <FormattedMessage {...messages.name} />
        </Form.Label>        
        <Form.Control type="text" value={newMovie.name} placeholder={NAME} onChange={onNameChange} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>
          <FormattedMessage {...messages.director} />
        </Form.Label>
        <Form.Control type="text" value={newMovie.director} placeholder={DIRECTOR} onChange={onDirectorChange} />
      </Form.Group>

      <Form.Group  className="mb-3">
        <Form.Label>
          <FormattedMessage {...messages.img} />
        </Form.Label>
        <Form.Control type="file" value={newMovie.image} onChange={onImgChange} placeholder={IMAGE}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>
          <FormattedMessage {...messages.year} />
        </Form.Label>
        <Form.Control type="text" value={newMovie.year} onChange={onYearChange} placeholder={YEAR}/>
      </Form.Group>
    
      <Form.Group className="mb-3" >
        <Form.Label>
          <FormattedMessage {...messages.category} />
        </Form.Label>
        <Form.Control type="text" value={newMovie.category} placeholder={CATEGORY} onChange={onCategoryChange}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        <FormattedMessage {...messages.submit} />
      </Button>
    </Form>
  )
}
AddMovieForm.propTypes = {
  parentCallback: PropTypes.func,
  currentMovie:PropTypes.oneOfType([PropTypes.object,PropTypes.bool])
};
  

export default (AddMovieForm);
