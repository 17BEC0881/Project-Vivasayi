import { useState } from "react";
import "./Add_Employee.css";
import axios from "axios";
import { Fragment } from "react";
import Layout from "../Layout/Layout";

const Add = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");

  const firstnameChangeHandler = (event) => {
    event.preventDefault();
    setFirstname(event.target.value);
  };

  const lastnameChangeHandler = (event) => {
    event.preventDefault();
    setLastname(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const phonenumberChangeHandler = (event) => {
    event.preventDefault();
    setPhoneNumber(event.target.value);
  };

  const emailChangeHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const details = {
    first_name: firstname,
    last_name: lastname,
    username: username,
    email: email,
    contact_number: phoneNumber,
  };

  const registerHandler = (event) => {
    event.preventDefault();
    const admintoken = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .post(
        `https://6e93-49-204-135-131.in.ngrok.io/employee/create`,
        details,
        admintoken
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        const Error = error.response;
        console.log(Error);
      });
    //console.log(admintoken)
    setFirstname("");
    setLastname("");
    setUsername("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <Fragment>
      <Layout />
      <div className="Add">
        <form className="Add-form">
          <h1>Add Employee</h1>
          <div className="Add-name">
            <input
              type="text"
              placeholder="First Name*"
              value={firstname}
              onChange={firstnameChangeHandler}
              required
            />
            <input
              type="text"
              placeholder="Last Name*"
              value={lastname}
              onChange={lastnameChangeHandler}
              required
            />
          </div>
          <div className="Add-details">
            <input
              type="text"
              placeholder="User Name*"
              value={username}
              onChange={usernameChangeHandler}
              required
            />
            <input
              type="number"
              placeholder="Phone Number*"
              value={phoneNumber}
              onChange={phonenumberChangeHandler}
              required
            />
            <input
              type="text"
              placeholder="Email*"
              value={email}
              onChange={emailChangeHandler}
              required
            />
          </div>
          <div className="Add-button">
            <button type="submit" onClick={registerHandler}>
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default Add;
