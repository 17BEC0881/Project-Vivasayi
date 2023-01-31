import { useState } from "react";
import './Signup.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Fragment } from "react";

const Signup = () => {

  const [name, setName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //const [credentials , setcredentials] = useState({});
  const [errorMessage, seterrorMessage] =  useState(false);
  const [error, setError] = useState({});
  const [nameclicked, setNameClicked] = useState(false);
  const [passclicked, setPassClicked] = useState(false);
  const [cpassclicked, setCpassClicked] = useState(false);
  const navigate = useNavigate();

  const usernameChangeHandler = (event) => {
    event.preventDefault()
    setName(event.target.value)
    setNameClicked(true)
  }

  const newPasswordChangeHandler = (event) => {
    event.preventDefault()
    setNewPassword(event.target.value)
    setPassClicked(true)
  }

  const confirmPasswordChangeHandler = (event) => {
    event.preventDefault()
    setConfirmPassword(event.target.value)
    setCpassClicked(true)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setNameClicked(false);
    setPassClicked(false);
    setCpassClicked(false);
    setError({});
    const Password = newPassword.trim();
    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const lowercaseRegExp   = /(?=.*?[a-z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp   = /.{8,}/;
    const passwordLength = Password.length;
    const uppercasePassword = uppercaseRegExp.test(Password);
    const lowercasePassword =   lowercaseRegExp.test(Password);
    const digitsPassword =      digitsRegExp.test(Password);
    const specialCharPassword = specialCharRegExp.test(Password);
    const minLengthPassword =   minLengthRegExp.test(Password);
    const validation = uppercasePassword && lowercasePassword &&
               digitsPassword && specialCharPassword && minLengthPassword;
    const usernameLength = name.trim().length
    if (validation && passwordLength > 0 && usernameLength > 0){
      if (newPassword === confirmPassword){
      // console.log(password)
       var credentials = {
           userName : name,
           password : newPassword
      }
      axios.post(`https://0bfa-49-204-117-72.in.ngrok.io/employee/signup`,credentials)
      .then((response) => {
          if(response.status === 201 || response.status === 200){
            console.log(response.data)
            alert("registered successfully!");
            navigate("/employee")
          }
      })
      .catch((error) => {
          const Error =  error.response.data
          console.log(Error)
          seterrorMessage(true)
          setError(Error)
      })
    }
      else{
        seterrorMessage(true)
        setError({ mismatch : "Password mismatched" })
     }
    }else if(passwordLength === 0){
        seterrorMessage(true)
        setError({ empty : "This field may not be empty"})
     }
     else{
        seterrorMessage(true)
        setError({ error : "password must contain min 8 characters atleast one upper case, one special character and numbers..." })
     }
      //console.log("crete",credentials)
      console.log(error)
    }

  return(
    <Fragment>
      <Layout />
     <div className="signup">
        <form className="signup-form"> 
           <h1>SIGN UP</h1>
           <label>
              User Name:
           </label>
           <input 
                type = "text" 
                placeholder="User Name"  
                value = {name}
                onChange = {usernameChangeHandler} 
            required />
            {!nameclicked && errorMessage && <div className='signuperror'>{error.empty}</div>}
            {!nameclicked && errorMessage && <div className='signuperror'>{error.userName}</div>}
            <label>
              New Password:
           </label>
            <input 
                type = "password" 
                placeholder="New Password"  
                value = {newPassword}
                onChange = {newPasswordChangeHandler} 
            required />
            {!passclicked && errorMessage && <div className='signuperror'>{error.password}</div>}
            {!passclicked && errorMessage && <div className='signuperror'>{error.empty}</div>}
            <label>
              Confirm Password:
           </label>
            <input 
                type = "password" 
                placeholder="Confirm Password"  
                value = {confirmPassword}
                onChange = {confirmPasswordChangeHandler} 
            required />
            {!cpassclicked && errorMessage && <div className='signuperror'>{error.password}</div>}
            {!cpassclicked && errorMessage && <div className='signuperror'>{error.error}</div>}
            {!cpassclicked && errorMessage && <div className='signuperror'>{error.empty}</div>}
            <button 
                type = "button"
                onClick = {submitHandler}
                >
                SIGN UP 
                </button>
              {errorMessage && <div className='signuperror'>{error.mismatch}</div>}
        </form>
     </div>
     </Fragment>
  )
}

export default Signup;
