import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] =  useState(false);
    const [nameclicked, setNameClicked] = useState(false);
    const [passclicked, setPassClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usernameChangeHandler = (event) => {
    event.preventDefault();
    setNameClicked(true)
    setName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    event.preventDefault();
    setPassClicked(true)
    setPassword(event.target.value);
  };

  const data = {
    username: name,
    password: password,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(`https://a77b-49-204-112-10.in.ngrok.io/employee/login`, data)
      .then((response) => {
        response = response.data;
        //console.log(response)
        let token = response["access"];
        //console.log(token)
        localStorage.setItem("token", token);
        localStorage.setItem("username", name);
        dispatch(authActions.login(token));
        navigate("/add_employee");
      }).catch((error) => {
            const Error =  error.response.data
            console.log(Error)
            seterrorMessage(Error)
            return Error;  
        })
    //setName("");
    //setPassword("");
    // dispatch(authActions.login());
    // navigate("/add_employee");
  };

  return (
    <div className="login">
      <form className="login-form">
        <input
          type="text"
          placeholder="User Name"
          value={name}
          onChange={usernameChangeHandler}
          required
        />
        {!nameclicked && errorMessage && <div className='error'>{errorMessage.username}</div>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordChangeHandler}
          required
        />
        {!passclicked && errorMessage && <div className='error'>{errorMessage.password}</div>}
        <button type="button" onClick={submitHandler}>
          SIGN IN
        </button>
        {errorMessage && <div className='error'>{errorMessage.detail}</div>}
      </form>
    </div>
  );
};

export default Login;
