<<<<<<< HEAD
import axios from 'axios';
import { useState, useEffect } from 'react';
import { farmerActions } from '../../store/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import classes from './Viewmachine.module.css';
import { MdEdit } from 'react-icons/md';

const ViewMachine = () => {
    const api = "https://34b9-49-204-116-70.in.ngrok.io";
    // const { editData } = useSelector((state) => state.farmer);
    // console.log("new",editData);
    const { machine_detail } = useSelector((state) => state.farmer);
    // console.log("machine",machine_detail);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [machine,setMachine] = useState([]);
    // const Id = machine.map((item, index) => item.farmerDetails.farmerId);
    // console.log("farmerId",Id);

    // useEffect(() => {
    //     axios.get(`${api}/farmer/all`,{
    //     headers: {
    //         "Access-Control-Allow-Origin":""
    //     }
    //     })
    //     .then((response) => {
    //         console.log(response);
    //         setMachine(response.data); 
    //     }).catch((error) => {
    //         if (error.response) {
    //             console.log(error.response);
    //             console.log(error.response.status);
    //         } else if (error.request) {
    //             console.log("network error");
    //         } else {
    //             console.log(error);
    //         }
    //     })
    //   }, []);

    var Id = "NIS0019";
    const filteredmachine = machine.filter(
        (item) => item.farmerDetails.farmerId === Id
    );
    console.log("m",filteredmachine); 

    const editHandler = (input) => {
        // const newEditMachinedata = machine.filter((item) => { item.machineDetails.map((input,id) => input === Input )});
        const newEditMachinedata = input;
        console.log("edit",newEditMachinedata);
        dispatch (farmerActions.edit_machine_data(newEditMachinedata))
        navigate("/machinedetails");
    }

    const clickHandler = (e) => {
        e.preventDefault();
        navigate("/machinedetails");
    };

    return (
        <section >
            <h3>Machine Details</h3>
            <button onClick={clickHandler}>Add Machine</button>
            <table border={1}> 
                <thead> 
                       <tr>
                          {/* <th>ID</th> */}
                          <th>Farmer Id</th>
                          <th>Machine Type</th>
                          <th>Machine Subtype</th>
                          <th>Attachment</th>
                          <th>Brand</th>
                          <th>Count</th>
                          <th>Rental Basics</th>   
                          <th>Rent Price</th>
                          <th>Actions</th>                   
                        </tr>     
                </thead>
                <tbody>
                {machine_detail.map((input) => (
                <tr key={input.id}>
                  <td>{input.farmerId}</td>
                  <td>{input.type}</td>
                  <td>{input.subType}</td>
                  <td>{input.attachments}</td>
                  <td>{input.brand}</td>
                  <td>{input.count}</td>
                  <td>{input.rentalBasis}</td>
                  <td>{input.rent}</td>
                  <td><MdEdit size={15} style={{ margin:"5px" }} onClick={() => editHandler(input)} /></td>
                </tr>
              ))}
                    {/* {machine_detail.map((input)=> {
                        return (
                                <tr>
                                    <td>{machine_detail.length+1}</td>
                                    <td>{input.farmerId}</td>
                                    <td>{input.type}</td>
                                    <td>{input.subType}</td>
                                    <td>{input.attachments}</td>
                                    <td>{input.brand}</td>
                                    <td>{input.count}</td>
                                    <td>{input.rentalBasis}</td>
                                    <td>{input.rent}</td>
                                    <td><MdEdit size={15} style={{ margin:"5px" }} onClick={() => editHandler(input)} /></td>
                                </tr>
                        )})} */}
                    {/* {machine.map((item, index)=> {
                        return (
                            item.machineDetails.map((input,id)=> {
                                return (
                                <tr key = {machine_detail.length}>
                                    <td>{machine_detail.length+1}</td>
                                    <td>{item.farmerDetails.farmerId}</td>
                                    <td>{input.type}</td>
                                    <td>{input.subType}</td>
                                    <td>{input.attachments}</td>
                                    <td>{input.brand}</td>
                                    <td>{input.count}</td>
                                    <td>{input.rentalBasis}</td>
                                    <td>{input.rent}</td>
                                    <td><MdEdit size={15} style={{ margin:"5px" }} onClick={() => editHandler(input)} /></td>
                                </tr>
                                )
                            })
                        )
                    })} */}
                </tbody>
            </table>
        </section>
    );
}

export default ViewMachine;
=======
import axios from 'axios';
import { useState, useEffect } from 'react';
import { farmerActions } from '../../store/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './Viewmachine.module.css';
import { MdEdit } from 'react-icons/md';
import { AiTwotoneDelete } from "react-icons/ai";

const ViewMachine = () => {
    const api = "https://34b9-49-204-116-70.in.ngrok.io";
    // const { editData } = useSelector((state) => state.farmer);
    // console.log("new",editData);
    const { machine_detail } = useSelector((state) => state.farmer);
    // console.log("machine",machine_detail);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [machine,setMachine] = useState([]);
    // const Id = machine.map((item, index) => item.farmerDetails.farmerId);
    // console.log("farmerId",Id);

    // useEffect(() => {
    //     axios.get(`${api}/farmer/all`,{
    //     headers: {
    //         "Access-Control-Allow-Origin":""
    //     }
    //     })
    //     .then((response) => {
    //         console.log(response);
    //         setMachine(response.data); 
    //     }).catch((error) => {
    //         if (error.response) {
    //             console.log(error.response);
    //             console.log(error.response.status);
    //         } else if (error.request) {
    //             console.log("network error");
    //         } else {
    //             console.log(error);
    //         }
    //     })
    //   }, []);

    var Id = "NIS0019";
    const filteredmachine = machine.filter(
        (item) => item.farmerDetails.farmerId === Id
    );
    console.log("m",filteredmachine); 

    const editHandler = (input,index) => {
        // const newEditMachinedata = machine.filter((item) => { item.machineDetails.map((input,id) => input === Input )});
        const newEditMachinedata = input;
        console.log("edit",newEditMachinedata);
        dispatch (farmerActions.edit_machine_data(newEditMachinedata))
        navigate("/machinedetails");
    }

    const deleteHandler = (i) => {
        const deletemachine = machine_detail.filter((input,index,arr) => index!==i);
        console.log("del",deletemachine);
        dispatch(farmerActions.create_machine_detail(deletemachine));
    }

    const clickHandler = (e) => {
        e.preventDefault();
        navigate("/machinedetails");
    };

    return (
        <section className={classes.land}>
            <h3>Machine Details</h3>
            <button onClick={clickHandler}>Add Machine</button>
            <table border={1}> 
                <thead> 
                       <tr>
                          <th>S.No</th>
                          <th>Farmer Id</th>
                          <th>Machine Type</th>
                          <th>Machine Subtype</th>
                          <th>Attachment</th>
                          <th>Brand</th>
                          <th>Count</th>
                          <th>Rental Basics</th>   
                          <th>Rent Price</th>
                          <th>Actions</th>                   
                        </tr>     
                </thead>
                <tbody>
                {machine_detail.map((input,index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{input.farmerId}</td>
                  <td>{input.type}</td>
                  <td>{input.subType}</td>
                  <td>{input.attachments}</td>
                  <td>{input.brand}</td>
                  <td>{input.count}</td>
                  <td>{input.rentalBasis}</td>
                  <td>{input.rent}</td>
                  <td><MdEdit size={15} style={{ margin:"5px" }} onClick={() => editHandler(input,index)} />
                  <AiTwotoneDelete size={15} style={{ margin:"5px" }} onClick={() => deleteHandler(index)} /></td>
                </tr>
              ))}
                    {/* {machine_detail.map((input)=> {
                        return (
                                <tr>
                                    <td>{machine_detail.length+1}</td>
                                    <td>{input.farmerId}</td>
                                    <td>{input.type}</td>
                                    <td>{input.subType}</td>
                                    <td>{input.attachments}</td>
                                    <td>{input.brand}</td>
                                    <td>{input.count}</td>
                                    <td>{input.rentalBasis}</td>
                                    <td>{input.rent}</td>
                                    <td><MdEdit size={15} style={{ margin:"5px" }} onClick={() => editHandler(input)} /></td>
                                </tr>
                        )})} */}
                    {/* {machine.map((item, index)=> {
                        return (
                            item.machineDetails.map((input,id)=> {
                                return (
                                <tr key = {machine_detail.length}>
                                    <td>{machine_detail.length+1}</td>
                                    <td>{item.farmerDetails.farmerId}</td>
                                    <td>{input.type}</td>
                                    <td>{input.subType}</td>
                                    <td>{input.attachments}</td>
                                    <td>{input.brand}</td>
                                    <td>{input.count}</td>
                                    <td>{input.rentalBasis}</td>
                                    <td>{input.rent}</td>
                                    <td><MdEdit size={15} style={{ margin:"5px" }} onClick={() => editHandler(input)} /></td>
                                </tr>
                                )
                            })
                        )
                    })} */}
                </tbody>
            </table>
        </section>
    );
}

export default ViewMachine;
>>>>>>> 757126afdc33fa9e7f82d5dca38ba973ff27d2be
