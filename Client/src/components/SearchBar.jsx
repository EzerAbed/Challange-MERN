import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './SearchBar.css';


const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${search}`);
  };

  return (
    <form className='search'>
      <input
        className='search-input'
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit" onClick={handleSearch} className='search-button'>
        <HiOutlineSearch className='search-icon'/>
      </button>
    </form>
  );
};

export default SearchBar;