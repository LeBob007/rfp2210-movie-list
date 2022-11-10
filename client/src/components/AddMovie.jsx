import React from 'react';

const { useState } = React;

const AddMovie = ({ add }) => {

  const [title, setTitle] = useState({});

  const handleChange = (event) => {
    setTitle({title: event.target.value, watched: false,
    year: 1999, runtime: 100, metascore: 0, imdb: 0})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    add(title);
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