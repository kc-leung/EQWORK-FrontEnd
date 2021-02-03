import React from 'react';
import './SearchBar.scss'

const SearchBar = ({ input: keyword, onChange: setKeyword, placeholder }) => {
  return (
    <div className="searchBarContainer">
      <input
        className="searchBarStyle"
        type="text"
        value={keyword}
        placeholder={"Search by " + placeholder}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}

export default SearchBar