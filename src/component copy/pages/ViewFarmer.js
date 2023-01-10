import axios from 'axios';
import { useState, useEffect } from 'react';
import { farmeractions } from '../../store/reducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './ViewFarmer.module.css';
import { MdEdit } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';


const ViewFarmer = () => {
    const api = "http://192.168.0.103:8000";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [farmer,setFarmer] = useState([]);

    useEffect(() => {
        axios.get(`${api}/farmer/all`,{
        headers: {
            "Access-Control-Allow-Origin":""
        }
        })
        .then((response) => {
            console.log(response);
            setFarmer(response.data); 
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        })
      }, []);
    

    const editHandler = (Id) => {
        const newEditdata = farmer.filter((input) => input.farmerDetails.farmerId === Id);
        console.log("edit",newEditdata);
        dispatch (farmeractions.edit_data(newEditdata))
        navigate("/editfarmer");
    }

    const deleteHandler = (Id) => {
        const newdata = farmer.filter((input) => input.farmerDetails.farmerId === Id);
        var f_id;
        {newdata.map((input) => (
            f_id = (input.farmerDetails.farmerId)
        ))}
        // console.log(f_id);
        axios.delete(`${api}/farmer/id/${f_id}`)
        .then((response) => {
            console.log(response);
            alert("Are you want to delete??");
            if(response.status === 200) {
                alert("Delete successful");
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
    })
    };

    return (
        <div className={classes.land}>
            <h3>Farmer Details</h3>
            <table border={1}> 
                <thead> 
                       <tr>
                          <th>Farmer Id</th>
                          <th>Name</th>
                          <th>Father Name</th>
                          <th>Age</th>
                          <th>Gender</th>
                          <th>Phone Number</th>
                          <th>Whatsapp Number</th>   
                          <th>Village</th>
                          <th>Actions</th>                   
                        </tr>     
                </thead>
                <tbody>
                    {farmer.map((input) => (
                        <tr key={input.farmerDetails.farmerId}>
                           <td>{input.farmerDetails.farmerId}</td>
                           <td>{input.farmerDetails.farmerName}</td>
                           <td>{input.farmerDetails.fatherName}</td>
                           <td>{input.farmerDetails.age}</td>
                           <td>{input.farmerDetails.gender}</td>
                           <td>{input.farmerDetails.phoneNumber}</td>
                           <td>{input.farmerDetails.whatsappNumber}</td>
                           <td>{input.farmerDetails.village}</td>
                           <td><MdEdit size={15} onClick={() => editHandler(input.farmerDetails.farmerId)}/>
                           <AiTwotoneDelete size={15} onClick={(e) => deleteHandler(input.farmerDetails.farmerId)}/></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default ViewFarmer;