// import logo from './logo.svg';
import { Navigate, Route, Routes } from 'react-router-dom';
import Farmerdetails from './component/Farmerdetails';
import Machinedetails from './component/Machinedetails';
import './App.css';

function App() {
  return (
    <Routes>
          <Route path='/' element={<Navigate to='/farmerdetails' />} />
          <Route path='/farmerdetails' element={<Farmerdetails />} />
          <Route path='/machinedetails' element={<Machinedetails />} />
    </Routes>
  );
}

export default App;
