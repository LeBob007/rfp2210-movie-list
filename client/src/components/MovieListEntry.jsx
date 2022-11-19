import React from 'react';
import MovieListEntryPanel from './MovieListEntryPanel.jsx'

const { useState } = React;

const MovieListEntry = ({ movie, toggleWatch }) => {

  const [visiblePanel, setVisiblePanel] = useState(false);

  const displayPanel = (event) => {
    setVisiblePanel(!visiblePanel)
  }
  return (
    <div className="movie-list-element">
      <div onClick={displayPanel}>
        <span>
          {movie.movie_name}

        </span>
        {visiblePanel && (<MovieListEntryPanel movie={movie} toggleWatch={toggleWatch}/>)}

      </div>
    </div>
  )
}

export default MovieListEntry;