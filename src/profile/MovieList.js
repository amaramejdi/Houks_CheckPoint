import React, {useState} from 'react';
import MovieCard from './MovieCard';
import {Button} from 'react-bootstrap';
import AddMovie from './AddMovie';
 
const MovieList = ({movies, addNewMovie}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
       <div>
           <div>
             <Button onClick={handleShow}>Add Movie</Button>
           </div>
           <AddMovie show={show} handleClose={handleClose} addNewMovie={addNewMovie} />

          <div style={{display:"flex"}}>
             {movies.map((movie) => (
             <MovieCard movie={movie} />
              ))}
          </div>
       </div>
    )
}

export default MovieList