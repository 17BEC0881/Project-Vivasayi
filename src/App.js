// import logo from './logo.svg';
import { Navigate, Route, Routes } from 'react-router-dom';
import Farmerdetails from './component/pages/Farmerdetails';
import Machinedetails from './component/pages/Machinedetails';
import Login from './component/pages/Login';
import Land from './component/pages/Land';
import './App.css';
import ViewFarmer from './component/pages/ViewFarmer';

function App() {
  return (
    <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/farmerdetails' element={<Farmerdetails />} />
          <Route path='/land' element={<Land />} />
          <Route path='/machinedetails' element={<Machinedetails />} />
          <Route path='/viewfarmer' element={<ViewFarmer />} />
    </Routes>
  );
}

export default App;
