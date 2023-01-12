import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';


const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const adminHandler = (event) => {
      dispatch(authActions.admin())
      navigate("/admin") 
    }

    const employeeHandler = (event) => {
      dispatch(authActions.staff())
      navigate("/employee") 
    }

    return (
      <div>
        <div className="navbar">
          <div className="navlogo">Vivasayi</div>
          <div className="navlink">
            <button onClick={adminHandler}>Admin</button>
            <button onClick={employeeHandler}>Staff</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;