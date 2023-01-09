import './Header.css';
import { NavLink, Outlet} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/auth';
import { GiFarmer } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
//import { Router } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isauth = useSelector(state => state.auth.isAuthenticated);
  const username = localStorage.getItem('username')
 
  const logoutHandler =(event) => {
     dispatch(authActions.logout())
     localStorage.clear()
     navigate("/login");
  }
  
  return (
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
      <Outlet />
      </header>
    )
};

export default Header;