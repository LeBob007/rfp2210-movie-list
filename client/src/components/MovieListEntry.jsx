import React from 'react';

const MovieListEntry = ({ movie }) => {

  return (
    <div className="movie-list-element">
      <div>{movie.title}</div>
    </div>
  )
}

export default MovieListEntry;