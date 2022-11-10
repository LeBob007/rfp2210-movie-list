import React from 'react';

const { useState } = React;

const Search = ({ search }) => {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    search(value);
  }

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-input" type="text" onChange={handleChange}/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search;