import axios from "axios";
import { useState, useEffect } from "react";
import { farmerActions } from "../../store/reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./ViewFarmer.module.css";
import { MdEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";

const ViewFarmer = () => {
  const api = "http://abbf-182-65-110-25.in.ngrok.io";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [farmer, setFarmer] = useState([]);
  // const farmer = [
  //     {
  //         "farmerDetails": {
  //             "residentialType": "Local",
  //             "whatsappNumber": 7654897654,
  //             "farmerId": "JEY0001",
  //             "nickName": "Hanish",
  //             "farmerName": "Hanish Kumar",
  //             "age": 11,
  //             "gender": "Male",
  //             "fatherName": "S",
  //             "phoneNumber": 9212660591,
  //             "state": "Tamilnadu",
  //             "district": "Ramanathapuram",
  //             "union": "Mandapam",
  //             "panchayat": "pudhumadam",
  //             "village": "Ammapattinam",
  //             "organic": false,
  //             "singleSeed": false,
  //             "altCrop": false,
  //             "seedVariety": false,
  //             "leaseOwnLand": true,
  //             "farmRentedLand": false
  //         },
  //         "livestockDetails": [
  //             {
  //                 "type": "fyu",
  //                 "breed": ".kjlk",
  //                 "name": "kj",
  //                 "count": 87,
  //                 "season": "hhym"
  //             },
  //             {
  //                 "type": "jgftf",
  //                 "breed": "hgkj",
  //                 "name": "kyugliu",
  //                 "count": 76,
  //                 "season": "bkoil"
  //             }
  //         ],
  //         "labourDetails": [
  //             {
  //                 "landPlowing": false,
  //                 "weedRemoving": false,
  //                 "pesticideSpraying": false,
  //                 "handHarvesting": false,
  //                 "cropSpanking": false,
  //                 "pumpsetDuty": false,
  //                 "landCleaning": false,
  //                 "treeClimbing": false,
  //                 "paddySteaming": false,
  //                 "landPlowingWithTractor": false,
  //                 "fertilization": true
  //             }
  //         ],
  //         "machineDetails": [],
  //         "landDetails": [
  //             {
  //                 "supervisorId": "AIS0004",
  //                 "ownerId": "JEY0001",
  //                 "category": "leasedLand",
  //                 "addons": "None",
  //                 "landId": "JEY0001001",
  //                 "area": 102
  //             },
  //             {
  //                 "supervisorId": "MAH0006",
  //                 "ownerId": "JEY0001",
  //                 "category": "leasedLand",
  //                 "addons": "None",
  //                 "landId": "JEY0001002",
  //                 "area": 102
  //             },
  //             {
  //                 "supervisorId": "",
  //                 "ownerId": "JEY0001",
  //                 "category": "availableForLease",
  //                 "addons": "None",
  //                 "landId": "JEY0001006",
  //                 "area": 102
  //             },
  //             {
  //                 "supervisorId": "",
  //                 "ownerId": "JEY0001",
  //                 "category": "availableForLease",
  //                 "addons": "None",
  //                 "landId": "JEY0001007",
  //                 "area": 102
  //             },
  //             {
  //                 "supervisorId": "",
  //                 "ownerId": "JEY0001",
  //                 "category": "availableForLease",
  //                 "addons": "None",
  //                 "landId": "JEY0001008",
  //                 "area": 102
  //             },
  //             {
  //                 "supervisorId": "",
  //                 "ownerId": "JEY0001",
  //                 "category": "availableForLease",
  //                 "addons": "None",
  //                 "landId": "JEY0001009",
  //                 "area": 102
  //             },
  //             {
  //                 "supervisorId": "",
  //                 "ownerId": "JEY0001",
  //                 "category": "availableForLease",
  //                 "addons": "None",
  //                 "landId": "JEY0001010",
  //                 "area": 102
  //             },
  //             {
  //                 "supervisorId": "",
  //                 "ownerId": "JEY0001",
  //                 "category": "availableForLease",
  //                 "addons": "None",
  //                 "landId": "JEY0001011",
  //                 "area": 102
  //             },
  //             {
  //                 "supervisorId": "",
  //                 "ownerId": "JEY0001",
  //                 "category": "availableForLease",
  //                 "addons": "None",
  //                 "landId": "JEY0001012",
  //                 "area": 102
  //             },
  //             {
  //                 "supervisorId": "",
  //                 "ownerId": "JEY0001",
  //                 "category": "availableForLease",
  //                 "addons": "None",
  //                 "landId": "JEY0001013",
  //                 "area": 102
  //             }
  //         ],
  //         "cropDetails": [],
  //         "gardenDetails": [
  //             {
  //                 "type": "DWKJCX",
  //                 "name": "DOIU",
  //                 "variety": "DWOI",
  //                 "brand": "DRDOI333",
  //                 "area": 23,
  //                 "count": 3,
  //                 "organic": true,
  //                 "age": 434,
  //                 "sellingPeriod": "23D"
  //             }
  //         ],
  //         "buyDetails": [],
  //         "sellDetails": []
  //     },
  //     {
  //         "farmerDetails": {
  //             "residentialType": "Local",
  //             "whatsappNumber": 7092660353,
  //             "farmerId": "JEY0004",
  //             "nickName": "Hanish",
  //             "farmerName": "Jeyendran",
  //             "age": 11,
  //             "gender": "Male",
  //             "fatherName": "Jeyendran",
  //             "phoneNumber": 7092660353,
  //             "state": "Tamilnadu",
  //             "district": "Ramanathapuram",
  //             "union": "Mandapam",
  //             "panchayat": "pudhumadam",
  //             "village": "Ammapattinam",
  //             "organic": false,
  //             "singleSeed": false,
  //             "altCrop": false,
  //             "seedVariety": false,
  //             "leaseOwnLand": false,
  //             "farmRentedLand": false
  //         },
  //         "livestockDetails": [],
  //         "labourDetails": [
  //             {
  //                 "landPlowing": false,
  //                 "weedRemoving": false,
  //                 "pesticideSpraying": false,
  //                 "handHarvesting": false,
  //                 "cropSpanking": false,
  //                 "pumpsetDuty": false,
  //                 "landCleaning": false,
  //                 "treeClimbing": false,
  //                 "paddySteaming": false,
  //                 "landPlowingWithTractor": false,
  //                 "fertilization": false
  //             }
  //         ],
  //         "machineDetails": [],
  //         "landDetails": [],
  //         "cropDetails": [],
  //         "gardenDetails": [],
  //         "buyDetails": [],
  //         "sellDetails": []
  //     },
  //     {
  //         "farmerDetails": {
  //             "whatsappNumber": 9629772452,
  //             "farmerId": "SWE0003",
  //             "nickName": "swe",
  //             "farmerName": "Swetha",
  //             "age": 22,
  //             "gender": "female",
  //             "fatherName": "karunanithi",
  //             "phoneNumber": 9629772452,
  //             "state": "Tamilnadu",
  //             "district": "Dindigul",
  //             "union": "Oddanchatram",
  //             "panchayat": "Tamaraikulam",
  //             "village": "Kumbaram",
  //             "organic": false,
  //             "singleSeed": true,
  //             "altCrop": false,
  //             "seedVariety": false,
  //             "leaseOwnLand": true,
  //             "farmRentedLand": false
  //         },
  //         "livestockDetails": [],
  //         "labourDetails": [
  //             {
  //                 "landPlowing": false,
  //                 "weedRemoving": false,
  //                 "pesticideSpraying": false,
  //                 "handHarvesting": false,
  //                 "cropSpanking": false,
  //                 "pumpsetDuty": false,
  //                 "landCleaning": false,
  //                 "treeClimbing": false,
  //                 "paddySteaming": false,
  //                 "landPlowingWithTractor": false,
  //                 "fertilization": false
  //             }
  //         ],
  //         "machineDetails": [
  //             {
  //                 "rentalBasis": "Hour",
  //                 "rent": 900,
  //                 "count": 1,
  //                 "brand": "Mahindra",
  //                 "attachments": "Aerators",
  //                 "subType": "Push mowers",
  //                 "type": "Mowers"
  //             }
  //         ],
  //         "landDetails": [],
  //         "cropDetails": [
  //             {
  //                 "type": "Wetland",
  //                 "name": "Rice",
  //                 "variety": "Brown Rice",
  //                 "brand": "BRDL Limited",
  //                 "area": 3,
  //                 "croppedAt": "2023-01-19",
  //                 "organic": true,
  //                 "seedingType": "Seeded",
  //                 "harvestPeriod": "6 Months"
  //             },
  //             {
  //                 "type": "aaaa",
  //                 "name": "bbbb",
  //                 "variety": "cccc",
  //                 "brand": "dddd",
  //                 "area": 102,
  //                 "croppedAt": "eeee",
  //                 "organic": true,
  //                 "seedingType": "eeee",
  //                 "harvestPeriod": "ffff"
  //             }
  //         ],
  //         "gardenDetails": [],
  //         "buyDetails": [],
  //         "sellDetails": []
  //     },
  //     {
  //         "farmerDetails": {
  //             "residentialType": "Local",
  //             "whatsappNumber": 7092660353,
  //             "farmerId": "TES0002",
  //             "nickName": "test2",
  //             "farmerName": "test3",
  //             "age": 11,
  //             "gender": "Male",
  //             "fatherName": "test3",
  //             "phoneNumber": 7092669353,
  //             "state": "Tamilnadu",
  //             "district": "Ramanathapuram",
  //             "union": "Mandapam",
  //             "panchayat": "pudhumadam",
  //             "village": "Ammapattinam",
  //             "organic": false,
  //             "singleSeed": false,
  //             "altCrop": false,
  //             "seedVariety": false,
  //             "leaseOwnLand": false,
  //             "farmRentedLand": false
  //         },
  //         "livestockDetails": [],
  //         "labourDetails": [
  //             {
  //                 "landPlowing": false,
  //                 "weedRemoving": false,
  //                 "pesticideSpraying": false,
  //                 "handHarvesting": false,
  //                 "cropSpanking": false,
  //                 "pumpsetDuty": false,
  //                 "landCleaning": false,
  //                 "treeClimbing": false,
  //                 "paddySteaming": false,
  //                 "landPlowingWithTractor": false,
  //                 "fertilization": false
  //             }
  //         ],
  //         "machineDetails": [],
  //         "landDetails": [],
  //         "cropDetails": [],
  //         "gardenDetails": [],
  //         "buyDetails": [],
  //         "sellDetails": []
  //     }
  // ]

  useEffect(() => {
    axios
      .get(`${api}/farmer/all`, {
        headers: {
          "Access-Control-Allow-Origin": "",
        },
      })
      .then((response) => {
        console.log(response);
        setFarmer(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  }, []);

  const editHandler = (Id) => {
    const newEditdata = farmer.filter(
      (input) => input.farmerDetails.farmerId === Id
    );
    console.log("edit", newEditdata);
    dispatch(farmerActions.edit_data(newEditdata));
    navigate("/farmerdetails");
  };

  const deleteHandler = (Id) => {
    const newdata = farmer.filter(
      (input) => input.farmerDetails.farmerId === Id
    );
    var f_id;
    {
      newdata.map((input) => (f_id = input.farmerDetails.farmerId));
    }
    // console.log(f_id);
    axios
      .delete(`${api}/farmer/id/${f_id}`)
      .then((response) => {
        console.log(response);
        alert("Are you want to delete??");
        if (response.status === 200) {
          alert("Delete successful");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
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
              <td>
                <MdEdit
                  size={15}
                  style={{ margin: "5px" }}
                  onClick={() => editHandler(input.farmerDetails.farmerId)}
                />
                <AiTwotoneDelete
                  size={15}
                  style={{ margin: "5px" }}
                  onClick={(e) => deleteHandler(input.farmerDetails.farmerId)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFarmer;
