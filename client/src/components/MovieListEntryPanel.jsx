import React from 'react';

const { useState } = React;

const MovieListEntryPanel = ({ movie, toggleWatch }) => {

  const handleClick = (event) => {
    toggleWatch(movie);
  }

  return (
    <div>
      <p>Year: {movie.year}</p>
      <p>Runtime: {movie.runtime} min</p>
      <p>Metascore: {movie.metascore}</p>
      <p>IMDB Rating: {movie.imdb}</p>
      <p>
        {movie.watched
          ? <button className="watched" onClick={handleClick}>Watched</button>
          : <button className="towatch" onClick={handleClick}>To Watch</button>
        }
      </p>

    </div>
  )
}

export default MovieListEntryPanel;