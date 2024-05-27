import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './SearchBar.css';

const SearchBar = ({setProducts}) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/products/search/${search}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
        setProducts(data);
        console.log('Search results:', searchResults); // Add this line
      })
      .catch(error => console.error('Error searching products:', error));
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
