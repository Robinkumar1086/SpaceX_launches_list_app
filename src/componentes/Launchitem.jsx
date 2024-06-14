import React from 'react';

const LaunchItem = ({ launch }) => {
  const { mission_name, launch_date_local, rocket, launch_site, links  } = launch;
  const mission_patch = links?.mission_patch;
  const rocket_name = rocket?.rocket_name;

  return (
    <>
       
            <tr>
            <td><img src={mission_patch} alt="Mission Patch" /></td>
            <td>{mission_name}</td>
            <td>{new Date(launch_date_local).toLocaleDateString()}</td>
            <td>{rocket_name}</td>
            <td>{launch_site?.site_name}</td>
            
            </tr>
        
    </>
  );
};

export default LaunchItem;
