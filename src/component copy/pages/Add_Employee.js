import { useState } from 'react';
import './Add_Employee.css';
import axios from 'axios';
import { Fragment } from 'react';
import Layout from '../Layout/Layout';
import { useNavigate } from 'react-router-dom';

const Add = () => {

   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [username, setUsername] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [email, setEmail] = useState("");
   const [errorMessage, seterrorMessage] =  useState(false);
   const [error, setError] = useState({});
   const [fnameclicked, setFnameClicked] = useState(false);
   const [unameclicked, setUnameClicked] = useState(false);
   const [phonenumberclicked, setPhonenumberClicked] = useState(false);
   const [emailClicked, setEmailClicked] = useState(false);
   const navigate = useNavigate();
 
   const firstnameChangeHandler = (event) => {
      event.preventDefault()
      setFirstname(event.target.value)
      setFnameClicked(true)
    }

   const lastnameChangeHandler = (event) => {
       event.preventDefault()
       setLastname(event.target.value)
    }

   const usernameChangeHandler = (event) => {
      event.preventDefault()
      setUsername(event.target.value)
      setUnameClicked(true)
    }

   const phonenumberChangeHandler = (event) => {
      event.preventDefault();
      setPhonenumberClicked(true);
      setPhoneNumber(event.target.value)
     
   }

   const emailChangeHandler = (event) => {
      event.preventDefault()
      setEmail(event.target.value)
      setEmailClicked(true)
    }

    // var details = {
    //     first_name : firstname,
    //     last_name : lastname,
    //     username : username,
    //     email : email,
    //     contact_number : phoneNumber,
    // }

    const registerHandler = (event) => {
        event.preventDefault()
        setUnameClicked(false);
        setPhonenumberClicked(false);
        setEmailClicked(false)
        setError({});
        seterrorMessage(false);
        const user = username.trim()
        const digitsRegExp      = /(?=.*?[0-9])/;
        const minLengthRegExp   = /.{6,15}/;
        const nameLength = user.length;
        const digitsname =      digitsRegExp.test(user);
        const minLengthname =   minLengthRegExp.test(user);
        const unamevalidation  = nameLength && digitsname && minLengthname;
        if (unamevalidation && firstname.length > 0 && phoneNumber.length > 0 && user.length > 0){
            if(phoneNumber.length === 10){
            var details = {
                first_name : firstname,
                last_name : lastname,
                username : user,
                email : email,
                contact_number : phoneNumber,
            }
            const admintoken = {
                headers: {
                    "Authorization" : "Bearer "+ localStorage.getItem('token')
                },
            };
            axios.post(`https://b65c-49-204-136-20.in.ngrok.io/employee/create`,details,admintoken)
            .then((response) => {
               if(response.status === 201 || response.status === 200){
                   setFirstname("");
                   setLastname("");
                   setUsername("");
                   setPhoneNumber("");
                   setEmail("")
                   setError("");
                   alert("added successfully!")
                   navigate("/view_employee")
               }
            })
            .catch((error) => {
                const Error =  error.response.data
               // console.log(Error)
                seterrorMessage(true)
                setError(Error)
            })
        }else{
            seterrorMessage(true)
            setError({contact_number : "phone number must have 10 digits"})
        }}
        // else if( firstname.length === 0){
        //     seterrorMessage(true)
        //     setError({ first_name : "This field may not be empty"})
        //  }
        // else if(phoneNumber.length === 0){
        //     seterrorMessage(true)
        //     setError({ contact_number : "This field may not be empty"})
        // }
        // else if(user.length === 0){
        //     seterrorMessage(true)
        //     setError({ username : "This field may not be empty"})
        // }
        else if(firstname.length === 0 && phoneNumber.length === 0 && user.length === 0){
            seterrorMessage(true)
            setError({ empty : "This field may not be empty"})
        }
        else{
            seterrorMessage(true)
            setError({username : "username contains atleast one digit and min 6 characters"})
        }
        console.log(error)
    }
  
   return(
    <Fragment>
    <Layout />
     <div className='Add'>
        <form className='Add-form'>
        <h1>Add Employee</h1>
        <div className='Add-details'>
        <label>
            First Name:
        </label>
        <input 
            type = "text" 
            placeholder="First Name*"  
            value = {firstname}
            onChange = {firstnameChangeHandler} 
            required />
         {!fnameclicked && errorMessage && <div className='error'>{error.first_name}</div>}
         {!fnameclicked && errorMessage && <div className='error'>{error.empty}</div>}
        <label>
            Last Name:
        </label>
        <input 
            type = "text" 
            placeholder="Last Name" 
            value = {lastname} 
            onChange = {lastnameChangeHandler} 
             />
        <label>
            User Name:
        </label>
        <input 
            type = "text" 
            placeholder="User Name*" 
            value = {username} 
            onChange = {usernameChangeHandler} 
            required />
        {!unameclicked && errorMessage && <div className='error'>{error.username}</div>}
        {!unameclicked && errorMessage && <div className='error'>{error.empty}</div>}
        <label>
            Phone Number:
        </label>
        <input 
            type = "text" 
            placeholder="Phone Number*" 
            value = {phoneNumber} 
            onChange = {phonenumberChangeHandler} 
            required />
        {!phonenumberclicked && errorMessage && <div className='error'>{error.contact_number}</div>}
        {!phonenumberclicked && errorMessage && <div className='error'>{error.empty}</div>}
        <label>
            Email:
        </label>
        <input 
            type = "email" 
            placeholder="Email"  
            value = {email}
            onChange = {emailChangeHandler} 
             />
        {!emailClicked && errorMessage && <div className='error'>{error.email}</div>}
        </div>
        <div className='Add-button'>
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
export default Add;
