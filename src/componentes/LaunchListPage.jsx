import React, { useEffect , useState } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { fetchlaunch } from '../Store/userSlice';
import axios from 'axios';
import LaunchItem from './Launchitem';
import SearchBar from './searchbar';
import LaunchFilters from './Filterpanel';

const LaunchListPage = () => {
 const dispacth = useDispatch();
 const [searchQuery, setSearchQuery] = useState('');
 const [searchYear , setSearchyear] = useState('');
 const [launchStatus , setLaunchStatus] = useState('');
 
console.log(searchYear , launchStatus)
 const launchList = useSelector(state => state.data.launches)

 useEffect(()=>{
  const fetchlaunchdata = async ()=>{
    try {
      const res = await axios.get('https://api.spacexdata.com/v3/launches');
      const data = res.data;
      dispacth(fetchlaunch(data));
    } catch (error) {
      console.log(error)
    }
  }
  fetchlaunchdata();
 },[dispacth])

 const filteredLaunches = launchList.filter(launch => {
  const matchesSearchQuery = launch.mission_name.toLowerCase().includes(searchQuery.toLowerCase());
  const matchesSearchYear = searchYear ? launch.launch_year === searchYear : true;
  const matchesLaunchStatus = launchStatus ? launch.launch_success === (launchStatus === 'true') : true;
  return matchesSearchQuery && matchesSearchYear && matchesLaunchStatus;
});



  return (
    <>
    <SearchBar setSearchQuery={setSearchQuery} />
    <LaunchFilters setSearchyear={setSearchyear} setLaunchStatus={setLaunchStatus} launchList={launchList}/>
    <table className='launch_list'>
        <tbody>
        {filteredLaunches.length ? (
            filteredLaunches.map((item , index) => <LaunchItem launch={item} key={index} />)
          ) : (
            <tr>
              <td colSpan="5">No launches found.</td>
            </tr>
          )}

        </tbody>
        </table>
    </>
  )
}

export default LaunchListPage