import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { livestckk } from "../../store/gardenreducer";
import Layout from "../Layout/Layout";
import classes from "./garden.module.css";
const Livestock=()=>{
    const dataa=useSelector((state)=>state.user.livestck);
    const farmerid=useSelector((state)=>state.farmer.farmer_id);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [breed, setBreed]=useState();
    const [count, setCount]=useState();
    const [name, setName]=useState();
    const [place, setPlace]=useState();
    const [season, setSeason]=useState();
    const [type, setType]=useState();
    const livestockSubmitHandle=(e)=>{
        e.preventDefault();
        console.log("livestock...");
        const data={
            farmerId:farmerid[0],
            breed:breed,
            count:count,
            name:name,
            place:place,
            season:season,
            type:type
        };
        axios.post("https://34b9-49-204-116-70.in.ngrok.io/livestock/create",{
            livestockDetails:[data]
        }).then(res=>{
            if(res.status===200){
                console.log("submitting LIVESTOCK DETAILS...");
                dispatch(livestckk([...dataa,data]));
                navigate("/livestocktable");
            }
        }).catch((error) => {
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
                    <label>BREED:</label>
                    <input type="text" placeholder="Breed" value={breed} onChange={(e)=>setBreed(e.target.value)} required></input>
                    <label>COUNT:</label>
                    <input type="number" placeholder="Count" value={count} onChange={(e)=>setCount(e.target.value)} required></input>
                    <label>NAME:</label>
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required></input>
                    <label>PLACE:</label>
                    <input type="text" placeholder="Place" value={place} onChange={(e)=>setPlace(e.target.value)} required></input>
                    <label>SEASON:</label>
                    <input type="text" placeholder="Season" value={season} onChange={(e)=>setSeason(e.target.value)} required></input>
                    <label>TYPE:</label>
                    <input type="text" placeholder="Type" value={type} onChange={(e)=>setType(e.target.value)} required></input>
                    <button className="login-form button" type="submit" onClick={livestockSubmitHandle}>Submit</button>
                </form>
            </div>
        </Layout>
        
        
    )
}

export default Livestock;