import React, { useState } from "react";
import axios from "axios"
import classes from "./garden.module.css";
import {useDispatch, useSelector} from "react-redux";
import { Gardenn} from "../../store/gardenreducer";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";


const Garden=()=>{
  const dispatch =useDispatch();
  const farmerid=useSelector((state)=>state.farmer.farmer_id);
  console.log(farmerid);
  const dataa=useSelector((state)=>state.user.garden);
  const navigate=useNavigate();
  const [area, setArea]=useState();
  const [areaError, setAreaError]=useState();
  const[type, setType]=useState();
  const[typeError, setTypeError]=useState();
  const [name, setName]=useState();
  const [nameError, setnameError]=useState();
  const[variety, setVariety]=useState();
  const [varietyError, setVarietyError]=useState();
  const [brand, setBrand]=useState();
  const [brandError,setBrandError]=useState();
  const [count, setCount]=useState();
  const[countError,setCountError]=useState();
  const [organic, setOrganic]=useState();
  const[organicError, setOrganicError]=useState();
  const [age, setAge]=useState();
  const[ageError,setageError]=useState();
  const [sellingPeriod, setSelling]=useState();
  const [sellingError, setSellingError]=useState();
  const [networkerror, setnetworkError]=useState();
  
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
        "organic": organic,
        "age":age,
        "sellingPeriod":sellingPeriod
      };
      
      axios.post("https://a8b2-49-204-136-220.in.ngrok.io/garden/create",{
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
        if(error.response.data){
          setAreaError(error.response.data.area);
          setTypeError(error.response.data.type);
          setnameError(error.response.data.name);
          setVarietyError(error.response.data.variety);
          setBrandError(error.response.data.brand);
          setCountError(error.response.data.count);
          setageError(error.response.data.age);
          setSellingError(error.response.data.sellingPeriod);
          setOrganicError(error.response.data.organic);

        }else{
          setAreaError(null);
          setTypeError(null);
          setnameError(null);
          setVarietyError(null);
          setBrandError(null);
          setCountError(null);
          setageError(null);
          setSellingError(null);
          setOrganicError(null);
        }
      }else if(error.request){
        console.log("network error");
        console.warn("network error");
        alert("network error")
      }
    });
  }
      


  return(
    <Layout>
      <div className={classes.login}>
        <form>
          <h1 className="login h1">Garden form</h1>
          <label>Area</label>
          <input type="number" placeholder="Area" required value={area} onChange={(e)=>setArea(e.target.value)} ></input>
          {areaError? <span className="error">{areaError}</span>:null}<br/>
          <label>Type</label>
          <input type="text" placeholder="Type" value={type} onChange={(e)=>setType(e.target.value)} required></input>
          {typeError?<span className="error">{typeError}</span>:null}<br/>
          <label>Name</label>
          <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required></input>
          {nameError?<span className="error">{nameError}</span>:null}<br/>
          <label>Variety</label>
          <input type="text" placeholder="Variety" value={variety} onChange={(e)=>setVariety(e.target.value)} required></input>
          {varietyError?<span className="error">{varietyError}</span>:null}<br/>
          <label>Brand</label>
          <input type="text" placeholder="Brand" value={brand} onChange={(e)=>setBrand(e.target.value)} required></input>
          {brandError?<span className="error">{brandError}</span>:null}<br/>
          <label>Count</label>
          <input type="number" placeholder="Count" value={count} onChange={(e)=>setCount(e.target.value)} required></input>
          {countError?<span className="error">{countError}</span>:null}<br/>
          <label>Organic: </label>
          <input type="text" placeholder="eg: true or false" value={organic} onChange={(e)=>setOrganic(e.target.value)} required></input>
          {organicError?<span className="error">{organicError}</span>:null}<br/>
          <label>Age</label>
          <input type="number" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} required></input>
          {ageError?<span className="error">{ageError}</span>:null}<br/>
          <label>Selling period</label>
          <input type="text" placeholder="Selling period" value={sellingPeriod} onChange={(e)=>setSelling(e.target.value)} required></input>
          {sellingError?<span className="error">{sellingError}</span>:null}<br/>
          <button className="login button"  type="submit" onClick={submitHandle}>submit</button>
        </form >
      </div>
    </Layout>
  )
}

export default Garden;
