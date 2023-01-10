// import logo from './logo.svg';
import { Navigate, Route, Routes } from "react-router-dom";
import Farmerdetails from "./component/pages/Farmerdetails";
import Machinedetails from "./component/pages/Machinedetails";
import Login from "./component/pages/Login";
import Land from "./component/pages/Land";
import "./App.css";
import ViewFarmer from "./component/pages/ViewFarmer";
import Layout from "./component/Layout/Layout";
import Add from "./component/pages/Add_Emploee";
import Home from "./component/Layout/home";
import Signup from "./component/pages/Signup";
function App() {
  return (
    // <Layout>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add_employee" element={<Add />} />
      <Route path="/farmerdetails" element={<Farmerdetails />} />
      <Route path="/land" element={<Land />} />
      <Route path="/machinedetails" element={<Machinedetails />} />
      <Route path="/viewfarmer" element={<ViewFarmer />} />
    </Routes>
    // </Layout>
  );
}

export default App;
