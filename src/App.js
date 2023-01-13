// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Farmerdetails from "./component copy/pages/Farmerdetails";
import Machinedetails from "./component copy/pages/Machinedetails";
//import Login from "./component copyt/pages/Login";
import Start from "./component copy/pages/Start";
import Land from "./component copy/pages/Land";
import "./App.css";
// import EditFarmerdetails from "./component copy/pages/Editfarmerdetails";
import ViewFarmer from "./component copy/pages/ViewFarmer";
//import Layout from "./component copy/Layout/Layout";
import Add from "./component copy/pages/Add_Employee";
import CropForm from "./component copy/pages/CropForm";
// import Home from "./component copy/Layout/home";
import Signup from "./component copy/pages/Signup";
import Admin from "./component copy/pages/Admin";
import Employee from "./component copy/pages/Employee";
import View from "./component copy/pages/View_Employee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/add_employee" element={<Add />} />
      <Route path="/view_employee" element={<View />} />
      <Route path="/farmerdetails" element={<Farmerdetails />} />
      <Route path="/land" element={<Land />} />
      <Route path="/machinedetails" element={<Machinedetails />} />
      <Route path="/viewfarmer" element={<ViewFarmer />} />
      <Route path="/cropform" element={<CropForm />} />
    </Routes>
  );
}

export default App;
