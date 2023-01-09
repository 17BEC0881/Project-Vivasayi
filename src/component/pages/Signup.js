import { useState } from "react";
import './Signup.css';
import axios from "axios";

const Signup = () => {

  const [name, setName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const usernameChangeHandler = (event) => {
    event.preventDefault()
    setName(event.target.value)
  }

  const newPasswordChangeHandler = (event) => {
    event.preventDefault()
    setNewPassword(event.target.value)
  }

  const confirmPasswordChangeHandler = (event) => {
    event.preventDefault()
    setConfirmPassword(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (newPassword === confirmPassword){
      let password = newPassword
      console.log(password)
      const credentials  = {
           userName : name,
           password : password
      }
      axios.post(`https://f223-49-204-138-20.in.ngrok.io/employee/signup`,credentials)
      .then((response) => {
          console.log(response)
      })
      .catch((error) => {
          const Error =  error.response
          console.log(Error)
      })
    }
  }

  return(
     <div className="signup">
        <form className="signup-form"> 
           <input 
                type = "text" 
                placeholder="User Name"  
                value = {name}
                onChange = {usernameChangeHandler} 
            required />
            <input 
                type = "password" 
                placeholder="New Password"  
                value = {newPassword}
                onChange = {newPasswordChangeHandler} 
            required />
            <input 
                type = "password" 
                placeholder="Confirm Password"  
                value = {confirmPassword}
                onChange = {confirmPasswordChangeHandler} 
            required />
            <button 
                type = "button"
                onClick = {submitHandler}
                >
                SIGN UP 
                </button>
        </form>
     </div>
  )
}

export default Signup;