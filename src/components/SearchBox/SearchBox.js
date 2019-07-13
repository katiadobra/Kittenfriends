import React from 'react';

function SearchBox({ onSearchChange }) {
  return (
    <div className="pa4">
      <input
        className="pa3 ba bg-lightest-blue"
        type="search"
        onChange={onSearchChange}
        placeholder="search"
      />
    </div>
  );
}

export default SearchBox;
