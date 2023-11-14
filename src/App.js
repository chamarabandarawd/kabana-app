import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';




function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
