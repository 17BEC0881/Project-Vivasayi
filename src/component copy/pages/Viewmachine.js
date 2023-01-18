import axios from 'axios';
import { useState, useEffect } from 'react';
import { farmeractions } from '../../store/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './ViewFarmer.module.css';
import { MdEdit } from 'react-icons/md';

const ViewMachine = () => {
    const api = "http://6610-182-65-110-25.in.ngrok.io";
    // const { editData } = useSelector((state) => state.farmer);
    // console.log("new",editData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [machine,setMachine] = useState([]);
    // const Id = machine.map((item, index) => item.farmerDetails.farmerId);
    // console.log("farmerId",Id);

    const farmer = [
        {
            "farmerDetails": {
                "residentialType": "Local",
                "whatsappNumber": 7654897654,
                "farmerId": "JEY0001",
                "nickName": "Hanish",
                "farmerName": "Hanish Kumar",
                "age": 11,
                "gender": "Male",
                "fatherName": "S",
                "phoneNumber": 9212660591,
                "state": "Tamilnadu",
                "district": "Ramanathapuram",
                "union": "Mandapam",
                "panchayat": "pudhumadam",
                "village": "Ammapattinam",
                "organic": false,
                "singleSeed": false,
                "altCrop": false,
                "seedVariety": false,
                "leaseOwnLand": true,
                "farmRentedLand": false
            },
            "livestockDetails": [
                {
                    "type": "fyu",
                    "breed": ".kjlk",
                    "name": "kj",
                    "count": 87,
                    "season": "hhym"
                },
                {
                    "type": "jgftf",
                    "breed": "hgkj",
                    "name": "kyugliu",
                    "count": 76,
                    "season": "bkoil"
                }
            ],
            "labourDetails": [
                {
                    "landPlowing": false,
                    "weedRemoving": false,
                    "pesticideSpraying": false,
                    "handHarvesting": false,
                    "cropSpanking": false,
                    "pumpsetDuty": false,
                    "landCleaning": false,
                    "treeClimbing": false,
                    "paddySteaming": false,
                    "landPlowingWithTractor": false,
                    "fertilization": true
                }
            ],
            "machineDetails": [],
            "landDetails": [
                {
                    "supervisorId": "AIS0004",
                    "ownerId": "JEY0001",
                    "category": "leasedLand",
                    "addons": "None",
                    "landId": "JEY0001001",
                    "area": 102
                },
                {
                    "supervisorId": "MAH0006",
                    "ownerId": "JEY0001",
                    "category": "leasedLand",
                    "addons": "None",
                    "landId": "JEY0001002",
                    "area": 102
                },
                {
                    "supervisorId": "",
                    "ownerId": "JEY0001",
                    "category": "availableForLease",
                    "addons": "None",
                    "landId": "JEY0001006",
                    "area": 102
                },
                {
                    "supervisorId": "",
                    "ownerId": "JEY0001",
                    "category": "availableForLease",
                    "addons": "None",
                    "landId": "JEY0001007",
                    "area": 102
                },
                {
                    "supervisorId": "",
                    "ownerId": "JEY0001",
                    "category": "availableForLease",
                    "addons": "None",
                    "landId": "JEY0001008",
                    "area": 102
                },
                {
                    "supervisorId": "",
                    "ownerId": "JEY0001",
                    "category": "availableForLease",
                    "addons": "None",
                    "landId": "JEY0001009",
                    "area": 102
                },
                {
                    "supervisorId": "",
                    "ownerId": "JEY0001",
                    "category": "availableForLease",
                    "addons": "None",
                    "landId": "JEY0001010",
                    "area": 102
                },
                {
                    "supervisorId": "",
                    "ownerId": "JEY0001",
                    "category": "availableForLease",
                    "addons": "None",
                    "landId": "JEY0001011",
                    "area": 102
                },
                {
                    "supervisorId": "",
                    "ownerId": "JEY0001",
                    "category": "availableForLease",
                    "addons": "None",
                    "landId": "JEY0001012",
                    "area": 102
                },
                {
                    "supervisorId": "",
                    "ownerId": "JEY0001",
                    "category": "availableForLease",
                    "addons": "None",
                    "landId": "JEY0001013",
                    "area": 102
                }
            ],
            "cropDetails": [],
            "gardenDetails": [
                {
                    "type": "DWKJCX",
                    "name": "DOIU",
                    "variety": "DWOI",
                    "brand": "DRDOI333",
                    "area": 23,
                    "count": 3,
                    "organic": true,
                    "age": 434,
                    "sellingPeriod": "23D"
                }
            ],
            "buyDetails": [],
            "sellDetails": []
        },
        {
            "farmerDetails": {
                "residentialType": "Local",
                "whatsappNumber": 7092660353,
                "farmerId": "JEY0004",
                "nickName": "Hanish",
                "farmerName": "Jeyendran",
                "age": 11,
                "gender": "Male",
                "fatherName": "Jeyendran",
                "phoneNumber": 7092660353,
                "state": "Tamilnadu",
                "district": "Ramanathapuram",
                "union": "Mandapam",
                "panchayat": "pudhumadam",
                "village": "Ammapattinam",
                "organic": false,
                "singleSeed": false,
                "altCrop": false,
                "seedVariety": false,
                "leaseOwnLand": false,
                "farmRentedLand": false
            },
            "livestockDetails": [],
            "labourDetails": [
                {
                    "landPlowing": false,
                    "weedRemoving": false,
                    "pesticideSpraying": false,
                    "handHarvesting": false,
                    "cropSpanking": false,
                    "pumpsetDuty": false,
                    "landCleaning": false,
                    "treeClimbing": false,
                    "paddySteaming": false,
                    "landPlowingWithTractor": false,
                    "fertilization": false
                }
            ],
            "machineDetails": [],
            "landDetails": [],
            "cropDetails": [],
            "gardenDetails": [],
            "buyDetails": [],
            "sellDetails": []
        },
        {
            "farmerDetails": {
                "whatsappNumber": 9629772452,
                "farmerId": "SWE0003",
                "nickName": "swe",
                "farmerName": "Swetha",
                "age": 22,
                "gender": "female",
                "fatherName": "karunanithi",
                "phoneNumber": 9629772452,
                "state": "Tamilnadu",
                "district": "Dindigul",
                "union": "Oddanchatram",
                "panchayat": "Tamaraikulam",
                "village": "Kumbaram",
                "organic": false,
                "singleSeed": true,
                "altCrop": false,
                "seedVariety": false,
                "leaseOwnLand": true,
                "farmRentedLand": false
            },
            "livestockDetails": [],
            "labourDetails": [
                {
                    "landPlowing": false,
                    "weedRemoving": false,
                    "pesticideSpraying": false,
                    "handHarvesting": false,
                    "cropSpanking": false,
                    "pumpsetDuty": false,
                    "landCleaning": false,
                    "treeClimbing": false,
                    "paddySteaming": false,
                    "landPlowingWithTractor": false,
                    "fertilization": false
                }
            ],
            "machineDetails": [
                {
                    "rentalBasis": "Hour",
                    "rent": 900,
                    "count": 1,
                    "brand": "Mahindra",
                    "attachments": "Aerators",
                    "subType": "Push mowers",
                    "type": "Mowers"
                }
            ],
            "landDetails": [],
            "cropDetails": [
                {
                    "type": "Wetland",
                    "name": "Rice",
                    "variety": "Brown Rice",
                    "brand": "BRDL Limited",
                    "area": 3,
                    "croppedAt": "2023-01-19",
                    "organic": true,
                    "seedingType": "Seeded",
                    "harvestPeriod": "6 Months"
                },
                {
                    "type": "aaaa",
                    "name": "bbbb",
                    "variety": "cccc",
                    "brand": "dddd",
                    "area": 102,
                    "croppedAt": "eeee",
                    "organic": true,
                    "seedingType": "eeee",
                    "harvestPeriod": "ffff"
                }
            ],
            "gardenDetails": [],
            "buyDetails": [],
            "sellDetails": []
        },
        {
            "farmerDetails": {
                "residentialType": "Local",
                "whatsappNumber": 7092660353,
                "farmerId": "TES0002",
                "nickName": "test2",
                "farmerName": "test3",
                "age": 11,
                "gender": "Male",
                "fatherName": "test3",
                "phoneNumber": 7092669353,
                "state": "Tamilnadu",
                "district": "Ramanathapuram",
                "union": "Mandapam",
                "panchayat": "pudhumadam",
                "village": "Ammapattinam",
                "organic": false,
                "singleSeed": false,
                "altCrop": false,
                "seedVariety": false,
                "leaseOwnLand": false,
                "farmRentedLand": false
            },
            "livestockDetails": [],
            "labourDetails": [
                {
                    "landPlowing": false,
                    "weedRemoving": false,
                    "pesticideSpraying": false,
                    "handHarvesting": false,
                    "cropSpanking": false,
                    "pumpsetDuty": false,
                    "landCleaning": false,
                    "treeClimbing": false,
                    "paddySteaming": false,
                    "landPlowingWithTractor": false,
                    "fertilization": false
                }
            ],
            "machineDetails": [],
            "landDetails": [],
            "cropDetails": [],
            "gardenDetails": [],
            "buyDetails": [],
            "sellDetails": []
        }
    ]

    useEffect(() => {
        axios.get(`${api}/farmer/all`,{
        headers: {
            "Access-Control-Allow-Origin":""
        }
        })
        .then((response) => {
            console.log(response);
            setMachine(response.data); 
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

    var Id = "SWE0003";
    const filteredmachine = farmer.filter(
        (item) => item.farmerDetails.farmerId === Id
    );
    console.log("m",filteredmachine); 

    const editHandler = (input) => {
        // const newEditMachinedata = machine.filter((item) => { item.machineDetails.map((input,id) => input === Input )});
        const newEditMachinedata = input;
        console.log("edit",newEditMachinedata);
        dispatch (farmeractions.edit_machine_data(newEditMachinedata))
        navigate("/machinedetails");
    }

    return (
        <section className={classes.land}>
            <h3>Machine Details</h3>
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
                    {filteredmachine.map((item, index)=> {
                        return (
                            item.machineDetails.map((input,id)=> {
                                return (
                                <tr key = {input.id}>
                                    {/* <td>{item.machineDetails.length}</td> */}
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
                    })}
                    {/* {editData.map((machine) => {
                        machine.machineDetails.map((input,id) => (
                            console.log(input.type),
                            console.log(input.subType),
                            <tr key={input.id}>
                                <td>{input.type}</td>
                                <td>{input.subType}</td>
                                <td>{input.attachments}</td>
                                <td>{input.brand}</td>
                                <td>{input.count}</td>
                                <td>{input.rentalBasis}</td>
                                <td>{input.rent}</td>
                                <td><button>Edit</button></td>
                            </tr>
                        ))
                    })}                    */}
                </tbody>
            </table>
        </section>
    );
}

export default ViewMachine;