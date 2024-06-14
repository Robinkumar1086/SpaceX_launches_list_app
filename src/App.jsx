import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import { store } from './Store/store';
import LoginComponent from './componentes/authntication/Login';
import LaunchListPage from './componentes/LaunchListPage';
import SignupComponent from './componentes/authntication/Register';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
 
  return (
    <Provider store={store}>
      <Router>
      <Appcontent/>
    </Router>
    </Provider>
  )
}

function Appcontent (){
 const islogin = useSelector(state => state.auth.isLoggedIn);

return (
      <Routes>
        <Route path='/' element={ islogin ? <LaunchListPage/> : <LoginComponent/> } />
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/register' element={<SignupComponent/>}/>
      </Routes>
)
}


export default App;