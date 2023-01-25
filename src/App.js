import { Route, Routes } from "react-router-dom";
import Farmerdetails from "./component copy/pages/Farmerdetails";
import Machinedetails from "./component copy/pages/Machinedetails";
import Start from "./component copy/pages/Start";
import Land from "./component copy/pages/Land";
import ViewFarmer from "./component copy/pages/ViewFarmer";
import Add from "./component copy/pages/Add_Employee";
import CropForm from "./component copy/pages/CropForm";
import Signup from "./component copy/pages/Signup";
import Admin from "./component copy/pages/Admin";
import Employee from "./component copy/pages/Employee";
import View from "./component copy/pages/View_Employee";
import Livestock from "./component copy/pages/Livestock";
import Garden from "./component copy/pages/Garden";
import LabourWorkForm from "./component copy/pages/LabourWorkForm";
import Scroll from "./component copy/pages/Scroll";
import SelectLand from "./component copy/pages/SelectLand";
import LandTable from "./component copy/pages/LandTable";
import Edit from "./component copy/pages/Edit_Employee";
import Preview from "./component copy/pages/Preview";
import EditLivestock from "./component copy/pages/Editlivestocktable";
import Livestocktable from "./component copy/pages/Livestocktable";
import Gardentable from "./component copy/pages/Gardentable";
import Editgarden from "./component copy/pages/editgarden";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/add_employee" element={<Add />} />
      <Route path="/view_employee" element={<View />} />
      <Route path="/farmerdetails" element={<Farmerdetails />} />
      <Route path="/land" element={<Land />} />
      <Route path="/machinedetails" element={<Machinedetails />} />
      <Route path="/viewfarmer" element={<ViewFarmer />} />
      <Route path="/cropform" element={<CropForm />} />
      <Route path="/livestock" element={<Livestock />} />
      <Route path="/garden" element={<Garden />} />
      <Route path="/editgarden" element={<Editgarden />} />
      <Route path="/editlivestock" element={<EditLivestock />} />
      <Route path="/livestocktable" element={<Livestocktable />} />
      <Route path="/gardentable" element={<Gardentable />} />
      <Route path="/labour" element={<LabourWorkForm />} />
      <Route path="/edit_employee" element={<Edit />} />
      <Route path="selectlandtable" element={<Scroll />} />
      <Route path="selectlandpage" element={<SelectLand />} />
      <Route path="landtable" element={<LandTable />} />
      <Route path="/preview" element={<Preview />} />
    </Routes>
  );
}

export default App;
