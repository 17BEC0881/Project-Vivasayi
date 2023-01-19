import { useState } from 'react';
import './Edit_Employee.css';
import axios from 'axios';
import { Fragment } from 'react';
import Layout from '../Layout/Layout';
import { useSelector } from 'react-redux';

const Edit = () => {

   let data = useSelector(state => state.auth.data)
   const [firstname, setFirstname] = useState(data["firstName"]);
   const [lastname, setLastname] = useState(data["lastName"]);
   const [username, setUsername] = useState(data["userName"]);
   const [phoneNumber, setPhoneNumber] = useState(data["phoneNumber"]);
   const [email, setEmail] = useState(data["email"]);
   const slNo = data["slNo"]

   const firstnameChangeHandler = (event) => {
      setFirstname(event.target.value)
    }

   const lastnameChangeHandler = (event) => {
       setLastname(event.target.value)
    }

   const usernameChangeHandler = (event) => {
      setUsername(event.target.value)
    }

   const phonenumberChangeHandler = (event) => {
      setPhoneNumber(event.target.value)
   }

   const emailChangeHandler = (event) => {
      setEmail(event.target.value)
    }

    const editDetails = {
        first_name : firstname,
        last_name : lastname,
        username : username,
        email : email,
        contact_number : phoneNumber
    }

    const registerHandler = (event) => {
        event.preventDefault()
        console.log(editDetails)
        const admintoken = {
            headers: {
                "Authorization" : "Bearer "+ localStorage.getItem('token')
            },
        };
            axios.put(`https://66d4-49-204-138-29.in.ngrok.io/employee/${editDetails["username"]}`,editDetails,admintoken)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                const Error =  error.response
                console.log(Error)
            })
            setFirstname("")
            setLastname("")
            setUsername("")
            setPhoneNumber("")
            setEmail("")
    }
  
   return(
    <Fragment>
    <Layout />
     <div className='Edit'>
        <form className='Edit-form'>
        <h1>Add Employee</h1>
        <div className='Edit-name'>
        <input 
            type = "text" 
            placeholder="First Name*"  
            value = {firstname}
            onChange = {firstnameChangeHandler} 
            required />
        <input 
            type = "text" 
            placeholder="Last Name*" 
            value = {lastname} 
            onChange = {lastnameChangeHandler} 
            required />
        </div>
        <div className='Edit-details'>
        <input 
            type = "text" 
            placeholder="User Name*" 
            value = {username} 
            onChange = {usernameChangeHandler} 
            required />
        <input 
            type = "number" 
            placeholder="Phone Number*" 
            value = {phoneNumber} 
            onChange = {phonenumberChangeHandler} 
            required />
        <input 
            type = "text" 
            placeholder="Email*"  
            value = {email}
            onChange = {emailChangeHandler} 
            required />
        </div>
        <div className='Edit-button'>
        <button
        type = "submit"
        onClick = {registerHandler}
        >REGISTER
        </button>
        </div>
        </form>
     </div>
     </Fragment>
   )
}
export default Edit;