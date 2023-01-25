import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import classes from "./landtable.module.css";
import Layout from "../Layout/Layout";
import instance from "./BaseURL";
import { landActions } from "../../store/landStore";
import SimpleBarReact from "simplebar-react";

const LandTable = () => {
  const farmerDetails = [
    {
      farmerDetails: {
        whatsappNumber: 9080344821,
        farmerId: "AIS0004",
        nickName: "Is",
        farmerName: "Aishu",
        age: 22,
        gender: "female",
        fatherName: "Aishu",
        phoneNumber: 9080344821,
        state: "Tamilnadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudumadam",
        village: "Ammapattinam",
        organic: false,
        singleSeed: false,
        altCrop: false,
        seedVariety: false,
        leaseOwnLand: false,
        farmRentedLand: false,
      },
      livestockDetails: [],
      labourDetails: [
        {
          landPlowing: false,
          weedRemoving: false,
          pesticideSpraying: false,
          handHarvesting: false,
          cropSpanking: false,
          pumpsetDuty: false,
          landCleaning: false,
          treeClimbing: false,
          paddySteaming: false,
          landPlowingWithTractor: false,
          fertilization: true,
        },
      ],
      machineDetails: [],
      landDetails: [
        {
          supervisorId: "AIS0004",
          ownerId: "JEY0001",
          category: "takenLease",
          landId: "JEY0001001",
          area: 102,
          addons: "None",
        },
      ],
      cropDetails: [],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
  ];

  const dispatch = useDispatch();
  const { farmer_id } = useSelector((state) => state.farmer);
  const navigate = useNavigate();
  const { landData } = useSelector((state) => state.land);

  const [farmerLand, setFarmerLand] = useState();

  const [land, setLand] = useState();

  const removeHandler = async (id) => {
    landData.map((lands) => {
      if (lands.landId === id) {
        setLand(lands);
        console.log(land, id, "lands");
      }
    });
    console.log(land, id, "lands1");

    await instance({
      url: `/land/id/${land.landId}`,
      method: "delete",
      data: {
        farmerId: land.farmerId,
        landId: land.landId,
        ownerId: land.farmerId,
      },
    })
      .then((response) => {
        console.log("deleteresponse", response);
        console.log("delete", typeof land.landId);
        dispatch(landActions.deleteLand(land.landId));
        navigate("/land");
      })
      .catch((error) => {
        console.log("deleteerror", error);
      });
  };

  // const editHandler = (ind) => {
  //   navigate("/editland");
  // landData.map((land, landind) => {
  //   if (ind === landind) {
  //   } else {
  //     setEditLand([...editLand, land]);
  //   }
  // });
  // };
  const detailsHandler = () => {
    navigate("/cropform");
  };
  const cancelHandler = () => {
    navigate("/land");
  };
  const addHandler = () => {
    navigate("/land");
  };

  return (
    // <Layout>
    <div className={classes.land}>
      <div className={classes.container}>
        <h1>Land Details</h1>

        {/* <div className="remove-button">
          <button onClick={() => addHandler()}>Add Land</button>
        </div> */}
        <SimpleBarReact
          autoHide={true}
          style={{ maxHeight: 150 }}
          className={classes.land}
        >
          <table border="1" className="table">
            <thead>
              <tr className="table-head-row">
                <th>Land ID</th>
                <th>Onwer ID</th>
                <th>category</th>
                {/* <th>Name</th>
              <th>Area</th>
              <th>Father Name</th>
              <th>phoneNumber</th> */}
                <th>Supervisor ID</th>
                <th></th>
              </tr>
            </thead>
            {/* <tbody>
            {farmerDetails.map((farmer) =>
              farmer.landDetails.map((land) => (
                <tr key={land.landId}>
                  <td> {land.landId} </td>
                  <td>{land.ownerId}</td>
                  <td>{land.category}</td>
                  <td>{farmer.farmerDetails.farmerName}</td>
                  <td>{farmer.farmerDetails.area}</td>
                  <td>{farmer.farmerDetails.fatherName}</td>
                  <td>{farmer.farmerDetails.phoneNumber}</td>
                  <td>{land.supervisorId}</td>
                  <div className="remove-button">
                    <button onClick={() => removeHandler()}>remove</button>
                  </div>
                </tr>
              ))
            )}
          </tbody> */}
            <tbody>
              {landData.map((land, ind) => (
                <tr key={ind}>
                  <td> {land.landId} </td>
                  <td>{land.farmerId}</td>
                  <td>{land.category}</td>
                  {/* <td>{farmer.farmerDetails.farmerName}</td>
                <td>{farmer.farmerDetails.area}</td>
                <td>{farmer.farmerDetails.fatherName}</td>
                <td>{farmer.farmerDetails.phoneNumber}</td> */}
                  <td>{land.supervisorId}</td>
                  <div className="remove-button">
                    <button onClick={() => removeHandler(land.landId)}>
                      Remove
                    </button>
                    {/* <button onClick={removeHandler(ind)}>Edit</button> */}
                  </div>
                  {/* <div className="remove-button"> */}
                  {/* <button onClick={editHandler(land.landId)}>Edit</button> */}
                  {/* <button onClick={editHandler(ind)}>Remove</button> */}
                  {/* </div> */}
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="remove-button"> */}
          {/* <button onClick={cancelHandler}>Cancel</button> */}
          {/* </div>
        <div className="remove-button"> */}
          {/* <button onClick={detailsHandler}>Add More</button> */}
          {/* </div> */}
        </SimpleBarReact>
      </div>
    </div>
  );
};

export default LandTable;
