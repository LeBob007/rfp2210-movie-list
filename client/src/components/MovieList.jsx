import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const { useState } = React;

const MovieList = ({ movies, searchTerm, toggleWatch, watchList }) => {
  let filteredMovies = movies.filter((movie) => {
    return movie.title.includes(searchTerm);
  })

  return (
    <div>
      {filteredMovies.length === 0 ? <p>No Movies</p>
        : <div className="movie-list">
            {watchList ? filteredMovies.filter(movie => {
              return movie.watched === true;
            }).map((movie, index) => {
              return (<MovieListEntry movie={movie} key={index} toggleWatch={toggleWatch}/>)
            }) : filteredMovies.filter(movie => {
              return movie.watched === false;
            }).map((movie, index) => {
              return (<MovieListEntry movie={movie} key={index} toggleWatch={toggleWatch}/>)
            })}
          </div>
      }

    </div>

  )
}

export default MovieList;