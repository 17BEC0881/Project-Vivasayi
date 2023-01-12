// import logo from './logo.svg';
import { Navigate, Route, Routes } from "react-router-dom";
import Farmerdetails from "./component/pages/Farmerdetails";
import Machinedetails from "./component/pages/Machinedetails";
//import Login from "./component/pages/Login";
import Land from "./component/pages/Land";
import "./App.css";
import EditFarmerdetails from './component/pages/Editfarmerdetails';
import ViewFarmer from "./component/pages/ViewFarmer";
//import Layout from "./component/Layout/Layout";
import Add from "./component/pages/Add_Emploee";
//import Home from "./component/Layout/home";
import Signup from "./component/pages/Signup";
import Admin from "./component/pages/Admin";
import Employee from "./component/pages/Employee";
import View from "./component/pages/view_employee";


function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add_employee" element={<Add />} />
      <Route path="/view_employee" element={<View />} />
      <Route path="/farmerdetails" element={<Farmerdetails />} />
      <Route path='/editfarmer' element={<EditFarmerdetails />} />
      <Route path="/land" element={<Land />} />
      <Route path="/machinedetails" element={<Machinedetails />} />
      <Route path="/viewfarmer" element={<ViewFarmer />} />
    </Routes>
  );
}

export default App;
