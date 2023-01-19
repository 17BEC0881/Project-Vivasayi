import React, { useState } from "react";
import axios from "axios";
import classes from "./garden.module.css";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";

// import Gardentable from "./gardentable";
// import { Gardenn } from "./store/reducer";
import { useNavigate } from "react-router-dom";

const Garden = () => {
  const dispatch = useDispatch();
  // const dataa = useSelector((state) => state.user.garden);
  const navigate = useNavigate();
  const [farmerId, setFarmerid] = useState();
  const [area, setArea] = useState();
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [variety, setVariety] = useState();
  const [brand, setBrand] = useState();
  const [count, setCount] = useState();
  const [organic, setOrganic] = useState();
  const [age, setAge] = useState();
  const [sellingPeriod, setSelling] = useState();
  const [list, setList] = useState();
  const submitHandle = (e) => {
    e.preventDefault();
    const data = {
      farmerId: farmerId,
      area: area,
      type: type,
      name: name,
      variety: variety,
      brand: brand,
      count: count,
      organic: "TRUE",
      age: age,
      sellingPeriod: sellingPeriod,
    };

    // axios
    //   .post("https://6e93-49-204-135-131.in.ngrok.io/garden/create", {
    //     gardenDetails: [data],
    //   })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       console.log("submitting GARDEN DETAILS");

    //       // dispatch(Gardenn([...dataa, data]));
    //       // navigate("/gardentable");
    //     }
    //   });
    navigate("/labour");
  };

  return (
    <Layout>
      <div className={classes.login}>
        <h1 className="h3"> Garden Details</h1>
        <form>
          <div>
            <input
              type="text"
              placeholder="Farmer id"
              value={farmerId}
              onChange={(e) => setFarmerid(e.target.value)}
            ></input>
          </div>
          <div>
            {" "}
            <input
              type="number"
              placeholder="Area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Variety"
              value={variety}
              onChange={(e) => setVariety(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="number"
              placeholder="Count"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            ></input>
          </div>
          <div>
            {/* <label>Organic: </label>
            <label>
              <input
                type="checkbox"
                value={organic}
                onChange={(e) => setOrganic(e.target.value)}
              />
              true
            </label>
            <label>
              <input
                type="checkbox"
                value={organic}
                onChange={(e) => setOrganic(e.target.value)}
              />
              false
            </label> */}
          </div>
          <div>
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Selling period"
              value={sellingPeriod}
              onChange={(e) => setSelling(e.target.value)}
            ></input>
          </div>
          <div>
            <button type="submit" onClick={submitHandle}>
              submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Garden;
