import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Gardenn } from "../../store/gardenreducer";
import axios from "axios"
import "./Gardentable.css";
import Layout from "../Layout/Layout";
const Gardentable=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    let gar=useSelector((state)=>state.user.garden);
    console.log(gar);

    let editHandle=(input,index)=>{
        console.log("editing garden...");
        navigate("/editgarden", {state: {input,index}} );
        console.log(index)
    }
    let deleteHandle=(i)=>{
        const dele=gar.filter((x,index,arr)=>index!==i);
        console.log(dele);
        dispatch(Gardenn([...dele]));
        axios.put("https://a8b2-49-204-136-220.in.ngrok.io/garden/",{
            gardenDetails:[...dele]
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
    const cancelbuttonhandle=()=>{
        navigate("/garden");
    }
    const nextbuttonhandle=()=>{
        navigate("/labour");
    }
    let tablebody=gar.map((x,index)=>
        <tr key={index}>
            <td>{index+1}</td>
            <td>{x.farmerId}</td>
            <td>{x.area}</td>
            <td>{x.type}</td>
            <td>{x.name}</td>
            <td>{x.variety}</td>
            <td>{x.brand}</td>
            <td>{x.count}</td>
            <td>{x.organic}</td>
            <td>{x.age}</td>
            <td>{x.sellingPeriod}</td>
            <td><button className="garden button" onClick={()=>editHandle(x,index)}>edit</button></td>
            <td><button className="garden button" onClick={()=>deleteHandle(index)}>delete</button></td>
        </tr>);
        console.log(tablebody);
    return(
        <Layout>
            <div className="garden">
                <h1 className="login h1">Garden table </h1>
            
                <table className="garden table">
                    <thead>
                        <tr className="garden tr">
                            <th>s.no</th>
                            <th>farmer id</th>
                            <th>area</th>
                            <th>type</th>
                            <th>name</th>
                            <th>variety</th>
                            <th>brand</th>
                            <th>count</th>
                            <th>organic</th>
                            <th>age</th>
                            <th>sellingPeriod</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tablebody}
                    </tbody>
                </table>
                <button onClick={cancelbuttonhandle} className="garden button">cancel</button>
                <button onClick={nextbuttonhandle} className="garden button">next</button>
            </div>
        </Layout>
    )
}

export default Gardentable; 