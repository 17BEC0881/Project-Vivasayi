import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import classes from "./livestock.module.css";
// import { livestckk } from "./store/reducer";

const Livestock = () => {
  // const dataa = useSelector((state) => state.user.livestck);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [farmerid, setFarmerid] = useState();
  const [breed, setBreed] = useState();
  const [count, setCount] = useState();
  const [name, setName] = useState();
  const [place, setPlace] = useState();
  const [season, setSeason] = useState();
  const [type, setType] = useState();
  const livestockSubmitHandle = (e) => {
    e.preventDefault();
    console.log("livestock...");
    const data = {
      farmerId: farmerid,
      breed: breed,
      count: count,
      name: name,
      place: place,
      season: season,
      type: type,
    };
    // axios
    //   .post("https://6e93-49-204-135-131.in.ngrok.io/livestock/create", {
    //     livestockDetails: [data],
    //   })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       console.log("submitting LIVESTOCK DETAILS...");
    //       //   dispatch(livestckk([...dataa, data]));
    //       //   navigate("/livestocktable");
    //     }
    //   });
    navigate("/machinedetails");
  };
  return (
    <Layout>
      <div className={classes.login}>
        <form>
          <h1>Add LiveStock</h1>
          <input
            type="text"
            placeholder="farmer id"
            value={farmerid}
            onChange={(e) => setFarmerid(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="Count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Season"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          ></input>
          <button
            className="login-form button"
            type="submit"
            onClick={livestockSubmitHandle}
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Livestock;
