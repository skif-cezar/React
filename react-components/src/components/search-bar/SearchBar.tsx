import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placeholder }) => {
  return (
    <>
      <div className="search-block">
        <input type="text" className="search-block__input" placeholder={placeholder} />
        <button type="submit" className="search-block__button">
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export { SearchBar };
