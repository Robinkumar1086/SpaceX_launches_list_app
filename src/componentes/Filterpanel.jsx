// components/LaunchFilters.js
import React from 'react';

function LaunchFilters({setSearchyear ,setLaunchStatus , launchList}) {
    const years = launchList.map((launch)=> new Date(launch?.launch_date_local).getFullYear());
    const uniqueyears = [...new Set(years)]; 
  

  const handleYearChange = (e) => {
    setSearchyear(e.target.value);
  };

  const handleStatusChange = (e) => {
    setLaunchStatus(e.target.value);
  };

  return (
    <div className="launch-filters">
      <label htmlFor="yearFilter">Launch Year:</label>
      <select id="yearFilter" onChange={handleYearChange}>
        <option value="">All</option>
        {uniqueyears.map((year , index)=> <option key={index} value={year}>{year}</option>)}
      </select>
      <label htmlFor="statusFilter">Launch Status:</label>
      <select id="statusFilter" onChange={handleStatusChange}>
        <option value="">All</option>
        <option value="true">Successful</option>
        <option value="false">Failed</option>
      </select>
    </div>
  );
}

export default LaunchFilters;
