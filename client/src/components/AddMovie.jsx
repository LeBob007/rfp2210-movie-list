import React from 'react';

const { useState } = React;

const AddMovie = ({ add }) => {

  const [title, setTitle] = useState({});

  const handleChange = (event) => {
    setTitle({title: event.target.value})
  }

  const handleClick = (event) => {
    event.preventDefault();
    add(title);
  }

  return (
    <div className="add-movie">
      <form className="add-movie-form" onSubmit={handleClick}>
        <input className="add-movie-input" type="text" onChange={handleChange}/>
        <button className="add-movie-button" type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddMovie;