import React from 'react';

const { useState } = React;

const AddMovie = ({ add }) => {

  const [movie, setMovie] = useState({});

  const handleChange = (event) => {
    setMovie({movie_name: event.target.value, watched: false,
    year: 1999, runtime: 100, metascore: 0, imdb: 0})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    add(movie);
  }

  return (
    <div className="add-movie">
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <input className="add-movie-input" type="text" onChange={handleChange}/>
        <button className="add-movie-button" type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddMovie;