// import logo from './logo.svg';
import { Navigate, Route, Routes } from "react-router-dom";
import Farmerdetails from "./component/Farmerdetails";
import Machinedetails from "./component/Machinedetails";
import Land from "./component/pages/Land";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/farmerdetails" />} />
      <Route path="/farmerdetails" element={<Farmerdetails />} />
      <Route path="/machinedetails" element={<Machinedetails />} />
      <Route path="/land" element={<Land />} />
    </Routes>
  );
}

export default App;
