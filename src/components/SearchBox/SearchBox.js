import React from 'react';

function SearchBox({ changeSearch }) {
  return (
    <div className="pa4">
      <input
        className="pa3 ba bg-lightest-blue"
        type="search"
        onChange={changeSearch}
        placeholder="search"
      />
    </div>
  );
}

export default SearchBox;
