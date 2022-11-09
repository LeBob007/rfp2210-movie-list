import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'

const { useState, useEffect } = React;

const tempData = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'Lord of The Rings'},
  {title: 'Star Wars'},
  {title: 'The Gray Man'},
  {title: 'Bullet Train'},
  {title: 'Watcher'},
  {title: 'All Quiet on the Western Front'},
  {title: 'Descendant'},
  {title: 'The Good Nurse'},
  {title: 'Ticket to Paradise'},
  {title: 'Cars'},
  {title: 'Carter'},
  {title: 'Super Pets'},
  {title: 'Dr.Strange'},
  {title: 'Day Shift'},
  {title: 'Ambulance'},
  {title: 'Massive Talent'},
  {title: 'Elvis'},
  {title: 'Sell/Buy/Data'},
  {title: 'Policeman'},
  {title: 'Orphan: First Kill'},
  {title: 'Unhuman'},
  {title: 'Scream'},
  {title: 'Halloween Ends'},
  {title: 'Fresh'},
  {title: 'The Lost City'},
  {title: 'Rise'},
  {title: 'Luckiest Girl Alive'},
  {title: 'Thirteen Lives'},
  {title: 'Father Stu'},
  {title: 'The Outfit'},
  {title: 'Hustle'},
  {title: 'The Northman'},
  {title: 'Black Crab'},
  {title: 'Morbius'},
  {title: 'Prey'},
  {title: 'Uncharted'},
  {title: 'Luck'},
  {title: 'The Bad Guys'},
  {title: 'Cheaper By The Dozen'},
  {title: 'Sonic 2'},
  {title: 'LightYear'},
]

const App = (props) => {

  const [movies, setMovies] = useState([]);

  const [value, setValue] = useState('');

  const search = (query) => {
    setValue(query);
  }

  const add = (movie) => {
    setMovies(movies => [...movies, movie]);
  }

  return (
    <div>
      <div className="heading">
        <h1>Movie List</h1>
      </div>
      <div>
        <AddMovie add={add}/>
      </div>
      <div>
        <Search search={search}/>
      </div>
      <div>
        <MovieList movies={movies} searchTerm={value}/>
      </div>
    </div>


  );
}

export default App;