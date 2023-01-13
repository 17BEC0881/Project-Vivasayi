import './View_Employee.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth';
import { Fragment } from 'react';
import Layout from '../Layout/Layout';

const View = () => {
 
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  useEffect(() =>{
        const formtoken ={
            headers:{
                  "Authorization" : "Bearer "+ localStorage.getItem('token'),
               },
         };
         axios.get(`https://6e93-49-204-135-131.in.ngrok.io/employee/all`,formtoken)
         .then((response)=>{
          console.log(response.data)
          dispatch(authActions.employee(response.data))
         })
    },[])

    const editHandler = (event) => {

    }

    const deleteHandler = (event) => {

    }

    return (
      <Fragment>
      <Layout />
      <div className="view-employee">
      <div className="view-container">
        <table border="1" className="view-table">
          <thead>
            <tr className="view-table-head-row">
              <th>SlNo</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {user.map((employee) =>
              <tr key = {employee.slNo}>
                <td>{employee.slNo}</td>
                <td>{employee.firstName} {employee.lastName}</td>
                <td>{employee.userName}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneNumber}</td>
                <td><button type="button" onClick={editHandler}>Edit</button></td>
                <td><button type="button" onClick={deleteHandler}>Delete</button></td>
              </tr>
            )
            }
            </tbody>
            </table>
            </div>
      </div>
      </Fragment>
    )
}

export default View;