import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import axios from 'axios';

const { useState, useEffect } = React;

const tempData = [
  {movie_name: 'Mean Girls', watched: false, year: 1999, runtime: 100, metascore: 60, imdb: 6.5},
  {movie_name: 'Hackers', watched: false, year: 1999, runtime: 100, metascore: 60, imdb: 6.5},
  {movie_name: 'The Grey', watched: false, year: 1999, runtime: 100, metascore: 60, imdb: 6.5},
  {movie_name: 'Sunshine', watched: false, year: 1999, runtime: 100, metascore: 60, imdb: 6.5},
  {movie_name: 'Ex Machina', watched: false, year: 1999, runtime: 100, metascore: 60, imdb: 6.5}
]

const App = (props) => {

  const [movies, setMovies] = useState([]);

  const [value, setValue] = useState('');

  const [watchList, setWatchList] = useState(false);

  const [reRender, setReRender] = useState(false);

  const search = (query) => {
    setValue(query);
  }

  const add = (movie) => {
    axios.post('/movies', { movie_name: movie.movie_name })
      .then((response) => {
        setReRender(!reRender);
      })
  }

  const toggleWatch = (movie) => {
    // let index = movies.indexOf(movie);
    // let copyA = [...movies];
    // let copyI = {...copyA[index]};
    // copyI.watched = !copyI.watched;
    // copyA[index] = copyI;
    // setMovies(copyA);

    axios.patch(`/movies/${movie.id}`,)
      .then((response) => {
        setReRender(!reRender);
      })
  }

  const handleWatched = (event) => {
    setWatchList(true)
  }

  const handleToWatch = (event) => {
    setWatchList(false)
  }

  useEffect(() => {
    axios.get('/movies')
      .then((response) => {
        setMovies(response.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [reRender])

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