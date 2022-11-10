import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'

const { useState, useEffect } = React;

const tempData = [
  {title: 'Mean Girls', watched: false, year: 1999, runtime: 100, metascore: 60, imdb: 6.5},
  {title: 'Hackers', watched: false, year: 1999, runtime: 100, metascore: 60, imdb: 6.5},
  {title: 'The Grey', watched: false, year: 1999, runtime: 100, metascore: 60, imdb: 6.5},
  {title: 'Sunshine', watched: false, year: 1999, runtime: 100, metascore: 60, imdb: 6.5},
  {title: 'Ex Machina', watched: false, year: 1999, runtime: 100, metascore: 60, imdb: 6.5}
]

const App = (props) => {

  const [movies, setMovies] = useState(tempData);

  const [value, setValue] = useState('');

  const [watchList, setWatchList] = useState(false);

  const search = (query) => {
    setValue(query);
  }

  const add = (movie) => {
    setMovies(movies => [...movies, movie]);
  }

  const toggleWatch = (movie) => {
    let index = movies.indexOf(movie);
    let copyA = [...movies];
    let copyI = {...copyA[index]};
    copyI.watched = !copyI.watched;
    copyA[index] = copyI;
    setMovies(copyA);
  }

  const handleWatched = (event) => {
    setWatchList(true)
  }

  const handleToWatch = (event) => {
    setWatchList(false)
  }

  return (
    <div>
      <div className="heading">
        <h1>Movie List</h1>
      </div>
      <div>
        <AddMovie add={add}/>
      </div>
      <div className="sort-container">
          <Search search={search}/>
          <button className="watch-button" onClick={handleWatched}>Watched</button>
          <button className="watch-button" onClick={handleToWatch}>To Watch</button>

      </div>
      <div className="movie-container">
        <MovieList movies={movies} searchTerm={value}
          toggleWatch={toggleWatch} watchList={watchList}/>
      </div>
    </div>


  );
}

export default App;