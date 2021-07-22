import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { CATEGORY, IMAGE, YEAR, NAME, DIRECTOR} from '../../Common/consts';

export function AddMovieForm(props) {
  
  const [newMovie,setNewMovie] = useState({
    name: props.currentMovie.name,
    year:props.currentMovie.year,
    director: props.currentMovie.director,
    image: props.currentMovie.image,
    category: props.currentMovie.category
  })
  const handleSubmit = () =>{
    props.parentCallback(newMovie);
  }
  const onNameChange = (event) => setNewMovie({name:event.target.value,
    year:newMovie.year,director:newMovie.director,image:newMovie.image,category:newMovie.category});
  const onDirectorChange = (event) => setNewMovie({name:newMovie.name,year:newMovie.year,
    director:event.target.value, image:newMovie.image, category:newMovie.category});
  const onImgChange = (event) => setNewMovie({name:newMovie.name,year:newMovie.year,
    director:newMovie.director, image:event.target.value, category:newMovie.category});
  const onYearChange = (event) => setNewMovie({name:newMovie.name,year:event.target.value,
    director:newMovie.director, image:newMovie.image, category:newMovie.category});
  const onCategoryChange = (event) => setNewMovie({name:newMovie.name,year:newMovie.year,
    director:newMovie.director, image:newMovie.image, category:event.target.value});

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
