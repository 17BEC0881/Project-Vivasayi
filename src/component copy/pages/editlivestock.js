import axios from "axios"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { livestckk } from "../../store/gardenreducer";
import Layout from "../Layout/Layout";
import classes from "./garden.module.css";
const EditLivestock=()=>{
    let dataa=useSelector((state)=>state.user.livestck)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [farmerid, setFarmerid]=useState();
    const [breed, setBreed]=useState();
    const [count, setCount]=useState();
    const [name, setName]=useState();
    const [place, setPlace]=useState();
    const [season, setSeason]=useState();
    const [type, setType]=useState();
    
    const location=useLocation();
    console.log(location);
    const e=(location.state.input);
    const getLivestock=()=>{
        setFarmerid(e.farmerId);
        
        setBreed(e.breed);
        setCount(e.count);
        setName(e.name);
        setPlace(e.place);
        setSeason(e.season);
        setType(e.type);
    };
    useEffect(()=>{
        getLivestock();
    },[]);
    let data={
        "farmerId":farmerid,
        "breed":breed,
        "count":count,
        "name":name,
        "place":place,
        "season":season,
        "type":type
    };
    const editHandle=(e)=>{
            e.preventDefault();
            console.log("editing");
            console.log(data);
            Object.freeze(dataa);
            let datacopy=[...dataa];
            datacopy[location.state.index]=data;
            dispatch(livestckk([...datacopy]));
            axios.put("https://a77b-49-204-112-10.in.ngrok.io/livestock/",{
                livestockDetails:[...datacopy]
            }).then((res)=>{
                if(res.status===200){
                    navigate("/livestocktable");
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
                    <input type="text" placeholder="farmer id" value={farmerid} onChange={(e)=>setFarmerid(e.target.value)}></input>
                    <input type="text" placeholder="Breed" value={breed} onChange={(e)=>setBreed(e.target.value)}></input>
                    <input type="number" placeholder="Count" value={count} onChange={(e)=>setCount(e.target.value)}></input>
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                    <input type="text" placeholder="Place" value={place} onChange={(e)=>setPlace(e.target.value)}></input>
                    <input type="text" placeholder="Season" value={season} onChange={(e)=>setSeason(e.target.value)}></input>
                    <input type="text" placeholder="Type" value={type} onChange={(e)=>setType(e.target.value)}></input>
                    <button className="login-form button" type="submit" onClick={editHandle}>Submit</button>
                </form>
            </div>
        </Layout>
    )
}

export default EditLivestock;