import React, { useEffect, useState } from "react";
import axios from "axios"
import classes from "./garden.module.css";
import {useDispatch, useSelector} from "react-redux";
import { Gardenn } from "../../store/gardenreducer";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";

const Editgarden=()=>{
  
  const dispatch =useDispatch();
  let dataa=useSelector((state)=>state.user.garden);
  const navigate=useNavigate();
  const [farmerId, setFarmerid]=useState();
  const [area, setArea]=useState();
  const[type, setType]=useState();
  const [name, setName]=useState();
  const[variety, setVariety]=useState();
  const [brand, setBrand]=useState();
  const [count, setCount]=useState();
  const [organic, setOrganic]=useState();
  const [age, setAge]=useState();
  const [sellingPeriod, setSelling]=useState();
  
  let data={
    "farmerId":farmerId,
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
  let location=useLocation();
  const e=location.state.index;
  console.log(e);
  const[list, setList]=useState(e);
  const getgarden=()=>{
    axios.get("https://a77b-49-204-112-10.in.ngrok.io/farmer/all").then((res)=>console.log(res.data));
    setFarmerid(location.state.input.farmerId);
    setArea(location.state.input.area);
    setType(location.state.input.type);
    setName(location.state.input.name);
    setVariety(location.state.input.variety);
    setBrand(location.state.input.brand);
    setCount(location.state.input.count);
    setOrganic(location.state.input.organic);
    setAge(location.state.input.age);
    setSelling(location.state.input.sellingPeriod);
    }

  useEffect(()=>{
    getgarden();
  },[]);


  const submitHandle=(e)=>{
      e.preventDefault();
      
      console.log("editing");
      console.log(data);
      Object.freeze(dataa);
      const datacopy=[...dataa]
      datacopy[location.state.index]=data;
      dispatch(Gardenn([...datacopy]));
      axios.put("https://a77b-49-204-112-10.in.ngrok.io/garden/",{
        gardenDetails:[...datacopy]
      }).then((res)=>{
        if(res.status===200){
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
      <h3 className="h3"> Gardenedit details</h3>
        <form>
          <input type="text" placeholder="Farmer id" value={farmerId}  onChange={(e)=>setFarmerid(e.target.value)}></input>
          <input type="number" placeholder="Area" value={area} onChange={(e)=>setArea(e.target.value)}></input>
          <input type="text" placeholder="Type" value={type} onChange={(e)=>setType(e.target.value)}></input>
          <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
          <input type="text" placeholder="Variety" value={variety} onChange={(e)=>setVariety(e.target.value)}></input>
          <input type="text" placeholder="Brand" value={brand} onChange={(e)=>setBrand(e.target.value)}></input>
          <input type="number" placeholder="Count" value={count} onChange={(e)=>setCount(e.target.value)}></input>
          <label>Organic: </label>
          <input type="checkbox" value={organic} onChange={(e)=>setOrganic(e.target.value)}></input>true
          <input type="checkbox" value={organic} onChange={(e)=>setOrganic(e.target.value)}></input>false
          <input type="number" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}></input>
          <input type="text" placeholder="Selling period" value={sellingPeriod} onChange={(e)=>setSelling(e.target.value)}></input>
          <button className="login-form button"  type="submit" onClick={submitHandle}>submit</button>
        </form >
      </div>
    </Layout>
  )
}

export default Editgarden;