import { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Fragment } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const usernameChangeHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const newPasswordChangeHandler = (event) => {
    event.preventDefault();
    setNewPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    event.preventDefault();
    setConfirmPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (newPassword === confirmPassword) {
      let password = newPassword;
      console.log(password);
      const credentials = {
        userName: name,
        password: password,
      };
      axios
        .post(
          `https://a77b-49-204-112-10.in.ngrok.io/employee/signup`,
          credentials
        )
        .then((response) => {
          console.log(response);
          Navigate("/employee");
        })
        .catch((error) => {
          const Error = error.response;
          console.log(Error);
        });
    } else {
      console.log("password mismatch");
    }
  };

  return (
    <Fragment>
      <Layout />
      <div className="signup">
        <form className="signup-form">
          <input
            type="text"
            placeholder="User Name"
            value={name}
            onChange={usernameChangeHandler}
            required
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={newPasswordChangeHandler}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={confirmPasswordChangeHandler}
            required
          />
          <button type="button" onClick={submitHandler}>
            SIGN UP
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Signup;
