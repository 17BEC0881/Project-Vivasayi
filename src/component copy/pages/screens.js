import { Routes, Route } from 'react-router-dom';
import Add from './Add_Employee';
import Layout from '../Layout/Layout';
import Signup from './Signup';
import View from './View_Employee';
//import Start from './components/pages/Start';
import Admin from  './Admin';
import Employee from './Employee';

function Screen() {
    return (
    <div>
      <Layout />
      <Routes>
        {/* <Route path='/' element={<Start />} />  */}
        <Route path='/admin' element={<Admin />} /> 
        <Route path='/employee' element={<Employee />} /> 
        <Route path='/signup' element={<Signup />} /> 
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/add_employee' element={<Add />} />
        <Route path='/view_employee' element={<View />} />
      </Routes>
      </div>
    );
  }

  export default Screen;