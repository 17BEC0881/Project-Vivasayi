import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { livestckk } from "../../store/gardenreducer";
import "./Gardentable.css";
import axios from "axios";
import Layout from "../Layout/Layout";
import { MdEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";

const Livestocktable=()=>{
    const liv=useSelector((state)=>state.user.livestck);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const editHandle=(input,index)=>{
        console.log("editing...");
        navigate("/editlivestock", {state:{input,index}});
    }
    const deleteHandle=(i)=>{
        const dele=liv.filter((x,index,arr)=>index!==i);
        console.log(dele);
        dispatch(livestckk([...dele]));
        axios.put("https://53aa-49-204-114-250.in.ngrok.io/livestock/",{
            livestockDetails:[...dele]
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
        navigate("/livestock");
    }
    const nextbuttonhandle=()=>{
        navigate("/machinedetails");
    }
    
    console.log("LIVE",liv);
    const tablebody=liv.map((x, index)=>
        <tr key={index}>
            <td>{x.farmerId}</td>
            <td>{x.breed}</td>
            <td>{x.count}</td>
            <td>{x.name}</td>
            <td>{x.place}</td>
            <td>{x.season}</td>
            <td>{x.type}</td>
            <td>
                    <MdEdit
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
        </tr>

    );
    return(
        <Layout>
            <div className="garden">
                <h1 className="login h1" style={{"fontSize":"x-large"}}>Livestock table</h1>
                <table className="garden table">
                    <thead>
                        <tr className="garden tr">
                            <th>farmerid</th>
                            <th>breed</th>
                            <th>count</th>
                            <th>name</th>
                            <th>place</th>
                            <th>season</th>
                            <th>type</th>
                            <th>Actions</th>
                            
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

export default Livestocktable;