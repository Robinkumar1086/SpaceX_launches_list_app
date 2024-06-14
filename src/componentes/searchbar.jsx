// components/LaunchSearch.js
import React from 'react';

function LaunchSearch({setSearchQuery }) {

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="launch-search">
      <input
        type="text"
        placeholder="Search by mission name"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default LaunchSearch;
