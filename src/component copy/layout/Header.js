import './Header.css';
import { NavLink, Outlet} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/auth';
import { GiFarmer } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { Fragment } from 'react';
//import { Router } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isauth = useSelector(state => state.auth.isAuthenticated);
  const username = localStorage.getItem('username')

  const addEmployeeHandler = (event) => {
    event.preventDefault()
    navigate("/add_employee")
   }

   const viewEmployeeHandler = (event) => {
    event.preventDefault()
    navigate("/view_employee")
   }

   const addFarmerHandler = (event) => {
    event.preventDefault()
   }

   const viewFarmerHandler = (event) => {
    event.preventDefault()
   }
  const logoutHandler =(event) => {
     dispatch(authActions.logout())
     localStorage.clear()
     navigate("/login");
  }
  
  return (
    <Fragment>
      <header className='header'>
        <div className='header-front'>
          <ul>
           <GiFarmer style={{color: "white"}}/>
           <NavLink to='/login' className='active'>Fafaco</NavLink>
           </ul>
        </div>
        <div className='header-back'>
        {!isauth && (
         <nav>
          <ul>
            <li><NavLink to='/signup' className='active'>Sign Up</NavLink></li>
            <li><NavLink to='/login' className='active'>Login</NavLink></li>
          </ul>
         </nav>
        )}
        {isauth && (
         <nav>
          <ul className='header-button'>
          <CgProfile className='icon'/> <button>{username}</button>
          <button type="submit" onClick={logoutHandler}>Logout</button>
          </ul>
          </nav>
        )}</div>
      </header>
      <div>
      <div className='home1'>
     {isauth && <div className='employee'>
     <ul>
      <li>
      <button 
      type = "submit" 
      onClick={addEmployeeHandler}
      >Add Employee
      </button></li>
      <li>
      <button 
      type = "submit" 
      onClick={viewEmployeeHandler}
      >View Employee
      </button></li>
      <li><button 
      type = "submit" 
      onClick={addFarmerHandler}
      >Add Farmer
      </button></li>
      <li>
      <button 
      type = "submit" 
      onClick={viewFarmerHandler}
      >View Farmer
      </button></li>
      </ul>
     </div>}
     </div>
      </div>
      <Outlet />
      </Fragment>
    )
};

export default Header;