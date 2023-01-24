import React, { useState } from "react";
import axios from "axios"
import classes from "./garden.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Gardenn} from "../../store/gardenreducer";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";

const Garden=()=>{
  const dispatch =useDispatch();
  const farmerid=useSelector((state)=>state.farmer.farmer_id);
  console.log(farmerid);
  const dataa=useSelector((state)=>state.user.garden);
  const navigate=useNavigate();
  const [area, setArea]=useState();
  const[type, setType]=useState();
  const [name, setName]=useState();
  const[variety, setVariety]=useState();
  const [brand, setBrand]=useState();
  const [count, setCount]=useState();
  const [organic, setOrganic]=useState();
  const [age, setAge]=useState();
  const [sellingPeriod, setSelling]=useState();
  
  
  const submitHandle=(e)=>{
      e.preventDefault();
      let data={
        "farmerId":farmerid[0],
        "area":area,
        "type":type,
        "name":name,
        "variety":variety,
        "brand":brand,
        "count":count,
        "organic": "TRUE",
        "age":age,
        "sellingPeriod":sellingPeriod
      };
      
      axios.post("https://34b9-49-204-116-70.in.ngrok.io/garden/create",{
        gardenDetails: [data]
      }).then(res=>{
        if(res.status===200){
          console.log("submitting GARDEN DETAILS");
          console.log(res.data);
          dispatch(Gardenn([...dataa, data]));
          navigate("/gardentable");
        }
      }
    ).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    });
  }
      


  return(
    <Layout>
      <div className={classes.login}>
        <form>
          <label>AREA:</label>
          <input type="number" placeholder="Area" required value={area} onChange={(e)=>setArea(e.target.value)} ></input>
          <br/>
          <label>TYPE:</label>
          <input type="text" placeholder="Type" value={type} onChange={(e)=>setType(e.target.value)} required></input>
          <label>NAME:</label>
          <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required></input>
          <label>VARIETY:</label>
          <input type="text" placeholder="Variety" value={variety} onChange={(e)=>setVariety(e.target.value)} required></input>
          <label>BRAND:</label>
          <input type="text" placeholder="Brand" value={brand} onChange={(e)=>setBrand(e.target.value)} required></input>
          <label>COUNT:</label>
          <input type="number" placeholder="Count" value={count} onChange={(e)=>setCount(e.target.value)} required></input>
          <label>Organic: </label>
          <input type="checkbox" value={organic} onChange={(e)=>setOrganic(e.target.value)}></input>true
          <input type="checkbox" value={organic} onChange={(e)=>setOrganic(e.target.value)}></input>false<br></br>
          <label>AGE:</label>
          <input type="number" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} required></input>
          <label>SELLING PERIOD:</label>
          <input type="text" placeholder="Selling period" value={sellingPeriod} onChange={(e)=>setSelling(e.target.value)} required></input>
          <button className="login button"  type="submit" onClick={submitHandle}>submit</button>
        </form >
      </div>
    </Layout>
  )
}

export default Garden;
