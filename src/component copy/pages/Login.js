import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usernameChangeHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const data = {
    username: name,
    password: password,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // axios
    //   .post(`https://0912-122-164-81-58.in.ngrok.io/employee/login`, data)
    //   .then((response) => {
    //     response = response.data;
    //     //console.log(response)
    //     let token = response["access"];
    //     //console.log(token)
    //     localStorage.setItem("token", token);
    //     localStorage.setItem("username", name);
    //     dispatch(authActions.login(token));
    //     navigate("/add_employee");
    //   });
    //setName("")
    //setPassword("")
    dispatch(authActions.login());
    navigate("/add_employee");
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
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordChangeHandler}
          required
        />
        <button type="button" onClick={submitHandler}>
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default Login;
