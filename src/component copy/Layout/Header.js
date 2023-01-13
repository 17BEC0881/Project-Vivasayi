import "./Header.css";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";
import { GiFarmer } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { Fragment } from "react";
//import { Router } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isauth = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);
  const isfarmerLogin = useSelector((state) => state.auth.isLogin);
  console.log("farmer", isfarmerLogin);
  const username = localStorage.getItem("username");

  const addEmployeeHandler = (event) => {
    event.preventDefault();
    navigate("/add_employee");
  };

  const viewEmployeeHandler = (event) => {
    event.preventDefault();
    navigate("/view_employee");
  };

  const addFarmerHandler = (event) => {
    navigate("/farmerdetails");
    event.preventDefault();
  };

  const viewFarmerHandler = (event) => {
    event.preventDefault();
    navigate("/viewfarmer");
  };
  const logoutHandler = (event) => {
    dispatch(authActions.logout());

    dispatch(authActions.farmerLogout());

    console.log("far", isfarmerLogin);
    localStorage.clear();
    navigate("/");
  };

  const addLandHandler = () => {
    navigate("/land");
  };
  const addCropHandler = () => {
    navigate("/cropform");
  };
  const addGardenHandler = () => {
    navigate("/garden");
  };
  const addBuySell = () => {
    navigate("/buysell");
  };
  const addLiveStockHandler = () => {
    navigate("/livestock");
  };
  const addMachineHandler = () => {
    navigate("/machine");
  };
  const addLabourHandler = () => {
    navigate("/labour");
  };

  return (
    <Fragment>
      {!role && (
        <header className="header">
          <div className="header-front">
            <ul>
              <GiFarmer style={{ color: "white" }} />
              <NavLink to="/login" className="active">
                Fafaco
              </NavLink>
            </ul>
          </div>
          <div className="header-back">
            {!isauth && (
              <nav>
                <ul>
                  <li>
                    <NavLink to="/signup" className="active">
                      Sign Up
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/employee" className="active">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </nav>
            )}
            {isauth && (
              <nav>
                <ul className="header-button">
                  <CgProfile className="icon" /> <button>{username}</button>
                  <button type="submit" onClick={logoutHandler}>
                    Logout
                  </button>
                </ul>
              </nav>
            )}
          </div>
        </header>
      )}
      {role && (
        <header className="header">
          <div className="header-front">
            <ul>
              <GiFarmer style={{ color: "white" }} />
              <NavLink to="/login" className="active">
                Fafaco
              </NavLink>
            </ul>
          </div>
          <div className="header-back">
            {!isauth && (
              <nav>
                <ul>
                  <li>
                    <NavLink to="/admin" className="active">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </nav>
            )}
            {isauth && (
              <nav>
                <ul className="header-button">
                  <CgProfile className="icon" /> <button>{username}</button>
                  <button type="submit" onClick={logoutHandler}>
                    Logout
                  </button>
                </ul>
              </nav>
            )}
          </div>
        </header>
      )}
      <div>
        <div className="home1">
          {!isfarmerLogin && isauth && role && (
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
          {!isfarmerLogin && isauth && !role && (
            <div className="employee">
              <ul>
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
          {isfarmerLogin && isauth && (role || !role) && isfarmerLogin && (
            <div className="employee">
              <ul>
                <li>
                  <button type="submit" onClick={addLandHandler}>
                    Add Land
                  </button>
                </li>
                <li>
                  <button type="submit" onClick={addCropHandler}>
                    Add Crop
                  </button>
                </li>
                <li>
                  <button type="submit" onClick={addGardenHandler}>
                    Add Garden
                  </button>
                </li>
                <li>
                  <button type="submit" onClick={addLabourHandler}>
                    Add Labour
                  </button>
                </li>
                <li>
                  <button type="submit" onClick={addLiveStockHandler}>
                    Add LiveStock
                  </button>
                </li>
                <li>
                  <button type="submit" onClick={addMachineHandler}>
                    Add Machine
                  </button>
                </li>
                <li>
                  <button type="submit" onClick={addBuySell}>
                    Buy & Sell
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
