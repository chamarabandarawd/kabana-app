import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios'
import { UserContextProvider } from './components/UserContext';
import AccountPage from './pages/AccountPage';
import MyPlace from './pages/my-places/MyPlace';
import AddPlaces from './pages/my-places/AddPlaces';
import PlacesPage from './pages/my-places/PlacesPage';
import MyBookings from './pages/MyBookings';


axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/account' element={<AccountPage/>}/>
          <Route path='/account/places' element={<PlacesPage/>}/>
          <Route path='/account/bookings' element={<MyBookings/>}/>
          <Route path='/account/places/new' element={<AddPlaces/>}/>
          <Route path='/account/places/:id' element={<MyPlace/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
