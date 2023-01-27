import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Gardenn } from "../../store/gardenreducer";
import axios from "axios"
import "./Gardentable.css";
import Layout from "../Layout/Layout";
import { MdEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import instance from "./BaseURL";
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
        instance.put("/garden/",{
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
    const addHandle=()=>{
        navigate("/garden");
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
            <td>{x.organic.toString()}</td>
            <td>{x.age}</td>
            <td>{x.sellingPeriod}</td>
            <td><MdEdit
                      size={15}
                      style={{ margin: "5px" }}
                        onClick={()=>editHandle(x,index)}
                    />
                    <AiTwotoneDelete
                      size={15}
                      style={{ margin: "5px" }}
                      onClick={()=>deleteHandle(index)}
                    />
            </td>
        </tr>);
        console.log(tablebody);
    return(
        <Layout>
            <div className="garden">
                <h1 className="login h1" style={{"fontSize":"x-large"}}><b>Garden Details</b></h1>
                <div>
                <button onClick={addHandle}>Add garden</button>
                <table className="gardencontainer">
                    <thead>
                        <tr className="garden tr">
                            <th>farmer id</th>
                            <th>variety</th>
                            <th>type</th>
                            <th>brand</th>
                            <th>area</th>
                            <th>age</th>
                            <th>count</th>
                            <th>name</th>
                            <th>sellingPeriod</th>
                            <th>organic</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tablebody}
                    </tbody>
                </table>
                </div>
            </div>
        </Layout>
    )
}

export default Gardentable; 