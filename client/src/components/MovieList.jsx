import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({ movies, searchTerm }) => {

  return (
    <div className="movie-list">
      {movies.filter((movie) => {
        return movie.title.includes(searchTerm)
      }).map((movie, index) => {
        return (<MovieListEntry movie={movie} key={index} />)
      })}
    </div>
  )
}

export default MovieList;