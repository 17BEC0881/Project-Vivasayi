import axios from "axios";
import React from "react";
import classes from "./landtable.module.css";

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
    {
      farmerDetails: {
        whatsappNumber: 9629772451,
        farmerId: "NIS0007",
        nickName: "ss",
        farmerName: "nish",
        age: 21,
        gender: "female",
        fatherName: "nish",
        phoneNumber: 9629772451,
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
          fertilization: false,
        },
      ],
      machineDetails: [],
      landDetails: [
        {
          supervisorId: "",
          ownerId: "NIS0007",
          category: "availableForLease",
          addons: "None",
          landId: "NIS0007001",
          area: 100,
        },
        {
          supervisorId: "",
          ownerId: "NIS0007",
          category: "wasteLand",
          addons: "None",
          landId: "NIS0007002",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "NIS0007",
          category: "availableForLease",
          addons: "None",
          landId: "NIS0007003",
          area: 100,
        },
        {
          supervisorId: "",
          ownerId: "NIS0007",
          category: "availableForLease",
          addons: "None",
          landId: "NIS0007004",
          area: 100,
        },
        {
          supervisorId: "",
          ownerId: "NIS0007",
          category: "availableForLease",
          addons: "None",
          landId: "NIS0007005",
          area: 100,
        },
      ],
      cropDetails: [],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
  ];

  var farmers = [];
  var land = [];
  farmerDetails.map((farmer) => (land = farmer.landDetails));
  console.log("farmers", land);

  farmerDetails.map((farmer) => console.log(farmer.farmerDetails));
  const onClickHandler = () => {};

  const removeHandler = async (e) => {
    e.preventDefault();

    await axios({
      url: "http://90b9-49-204-114-12.in.ngrok.io/land/id/HAN0001001",
      method: "delete",
      data: {
        farmerId: "MAH0006",
        landId: "MAH0006003",
        ownerId: "MAH0006",
      },
    });
  };

  return (
    <div className={classes.land}>
      <div className={classes.container}>
        <h1>Land Details</h1>
        <table border="1" className="table">
          <thead>
            <tr className="table-head-row">
              <th>Land ID</th>
              <th>Onwer ID</th>
              <th>category</th>
              <th>Name</th>
              <th>Area</th>
              <th>Father Name</th>
              <th>phoneNumber</th>
              <th>Supervisor ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LandTable;
