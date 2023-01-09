import "./home.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const isauth = useSelector((state) => state.auth.isAuthenticated);

  const addEmployeeHandler = (event) => {
    event.preventDefault();
    navigate("/add_employee");
  };

  const viewEmployeeHandler = (event) => {
    event.preventDefault();
    navigate("/view_employee");
  };

  const addFarmerHandler = (event) => {
    event.preventDefault();
    navigate("/farmerdetails");
  };

  const viewFarmerHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="home1">
      {isauth && (
        <div className="employee">
          <ul>
            <li>
              <button type="submit" onClick={addEmployeeHandler}>
                Add Employee
              </button>
            </li>
            <li>
              <button type="submit" onClick={viewEmployeeHandler}>
                View Employee
              </button>
            </li>
            <li>
              <button type="submit" onClick={addFarmerHandler}>
                Add Farmer
              </button>
            </li>
            <li>
              <button type="submit" onClick={viewFarmerHandler}>
                View Farmer
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Home;
