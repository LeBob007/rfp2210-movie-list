import React from 'react';

const { useState, useEffect } = React;

const Search = ({ search }) => {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    search(value);
  }

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleClick}>
        <input className="search-input" type="text" onChange={handleChange}/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search;