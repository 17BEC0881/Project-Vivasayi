import Login from './Login';
import './Employee.css';
import { Fragment } from 'react';
import Layout from '../Layout/Layout';

const Employee = () => {
    return(
        <Fragment>
        <Layout />
        <div className='staff'>
            <h1>Employee Login</h1>
            <div className='staff-login'>
                <Login />
            </div>
        </div>
        </Fragment>
    )

}

export default Employee;