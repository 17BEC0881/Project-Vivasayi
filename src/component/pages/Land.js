import React, { useState } from "react";
import axios from "axios";
import classes from "./land.module.css";
import { useEffect } from "react";

const Land = () => {
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
      cropDetails: [
        {
          type: "aaaa",
          name: "bbbb",
          variety: "cccc",
          brand: "dddd",
          area: 102,
          croppedAt: "eeee",
          organic: true,
          seedingType: "eeee",
          harvestPeriod: "ffff",
        },
        {
          type: "aaaa",
          name: "bbbb",
          variety: "cccc",
          brand: "dddd",
          area: 102,
          croppedAt: "eeee",
          organic: true,
          seedingType: "eeee",
          harvestPeriod: "ffff",
        },
        {
          type: "Wetland",
          name: "Rice",
          variety: "Brown Rice",
          brand: "KRBL Limited",
          area: 100,
          croppedAt: "ee",
          organic: true,
          seedingType: "Planted",
          harvestPeriod: "6 months",
        },
        {
          type: "Wetland",
          name: "Rice",
          variety: "Brown Rice",
          brand: "ASCDF",
          area: 100,
          croppedAt: "2023-02-25",
          organic: false,
          seedingType: "Planted",
          harvestPeriod: "6 months",
        },
        {
          type: "Wetland",
          name: "Rice",
          variety: "Brown Rice",
          brand: "KBRL Limited",
          area: 102,
          croppedAt: "2023-01-05",
          organic: true,
          seedingType: "Seeded",
          harvestPeriod: "6 Months",
        },
        {
          type: "Wetland",
          name: "Rice",
          variety: "Brown Rice",
          brand: "BRDL Limited",
          area: 12,
          croppedAt: "2023-01-17",
          organic: true,
          seedingType: "Planted",
          harvestPeriod: "6 months",
        },
        {
          type: "Wetland",
          name: "Rice",
          variety: "Brown Rice",
          brand: "BRDL Limited",
          area: 12,
          croppedAt: "2023-01-17",
          organic: true,
          seedingType: "Planted",
          harvestPeriod: "6 months",
        },
      ],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        residentialType: "Local",
        whatsappNumber: 7654897654,
        farmerId: "JEY0001",
        nickName: "Hanish",
        farmerName: "Hanish Kumar",
        age: 11,
        gender: "Male",
        fatherName: "S",
        phoneNumber: 9212660591,
        state: "Tamilnadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "pudhumadam",
        village: "Ammapattinam",
        organic: false,
        singleSeed: false,
        altCrop: false,
        seedVariety: false,
        leaseOwnLand: true,
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
          category: "leasedLand",
          addons: "None",
          landId: "JEY0001001",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001002",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          addons: "None",
          landId: "JEY0001003",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          addons: "None",
          landId: "JEY0001004",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          addons: "None",
          landId: "JEY0001005",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001006",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001007",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001008",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001009",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001010",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001011",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001012",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001013",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001014",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001015",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001016",
          area: 100,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001017",
          area: 100,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001018",
          area: 100,
        },
      ],
      cropDetails: [],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        whatsappNumber: 9878786756,
        farmerId: "MAH0006",
        nickName: "ma",
        farmerName: "Maha",
        age: 22,
        gender: "female",
        fatherName: "Maha",
        phoneNumber: 9878786756,
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
      landDetails: [],
      cropDetails: [],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        whatsappNumber: 9790438091,
        farmerId: "NIS0005",
        nickName: "nishu",
        farmerName: "Nisha",
        age: 24,
        gender: "female",
        fatherName: "Nisha",
        phoneNumber: 9790438091,
        state: "Tamilnadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudumadam",
        village: "Ammapattinam",
        organic: false,
        singleSeed: false,
        altCrop: false,
        seedVariety: true,
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
      landDetails: [],
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
    {
      farmerDetails: {
        residentialType: "Local",
        whatsappNumber: 7092660353,
        farmerId: "TES0002",
        nickName: "test2",
        farmerName: "test3",
        age: 11,
        gender: "Male",
        fatherName: "test3",
        phoneNumber: 7092669353,
        state: "Tamilnadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "pudhumadam",
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
      landDetails: [],
      cropDetails: [],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
  ];

  const availabelLeaseOwnerIdList = [];
  const availableLeaseLandIdList = [];
  const availabelLeaseList = {};

  const [area, setArea] = useState("");
  const [interestedFor, setInterestedFor] = useState("");
  // const [selectedFarming, setSelectedFarming] = useState("");
  const [update, setUpdate] = useState([]);
  const [addOns, setAddOns] = useState("");
  const [supervisorID, setSupervisorID] = useState("");
  const [wasteland, setWasteLand] = useState("");
  const [landId, setLandId] = useState("");
  const [list, setList] = useState([]);
  const [lanid, setLandid] = useState();

  const farmingList = ["interestedToClean", "cleanupTOFarm"];

  const addOnHandler = (e) => {
    e.preventDefault();
    const selectedFarming = e.target.value;
    // setSelectedFarming(e.target.value);

    console.log("select", typeof update[0], typeof selectedFarming);

    if (
      selectedFarming != "" &&
      update.includes(selectedFarming.toLowerCase())
    ) {
      console.log("no");
      alert("no duplicates allowed");
    } else if (
      selectedFarming != "" &&
      !update.includes(selectedFarming.toLowerCase())
    ) {
      console.log("yes");
      setUpdate([selectedFarming, ...update]);
    }
  };
  console.log("update", update);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(area, interestedFor, addOns, supervisorID);

    // const userData = {
    //   landDetails: [
    //     {
    //       farmerId: "JEY0001",
    //       area: 102,
    //       category: "availableForLease",
    //       addons: "None",
    //       supervisorId: "",
    //     },
    //   ],
    // };

    // await axios({
    //   url: "https://d97d-1-38-192-14.in.ngrok.io/land/create",
    //   method: "post",
    //   data: {
    //     landDetails: [
    //       {
    //         farmerId: "NIS0007",
    //         area: area,
    //         category: interestedFor,
    //         wasteland: wasteland,
    //         addons: addOns,
    //         supervisorId: supervisorID,
    //       },
    //     ],
    //   },
    //   // body: JSON.stringify(userData),
    //   // headers: {
    //   //   "content-type": "application/json",
    //   // },
    // })
    //   .then((response) => {
    //     console.log("res", response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  if (interestedFor == "leasedLand") {
    console.log("yes");

    farmerDetails.map((farmer) => {
      // console.log("landdetails", farmer.landDetails);
      if (farmer.landDetails == []) {
        console.log("no land details area available");
      } else {
        farmerDetails.map((land) => {
          // console.log(
          // "land",
          land.landDetails.map((cat) => {
            // console.log("cat", cat.category);
            if (cat.category == "availableForLease") {
              // if (!availabelLeaseOwnerIdList.includes(cat.ownerId)) {
              // console.log("lis");
              // availabelLeaseOwnerIdList.push(cat.ownerId);

              if (!availableLeaseLandIdList.includes(cat.landId)) {
                availabelLeaseOwnerIdList.push(cat.ownerId);
                availableLeaseLandIdList.push(cat.landId);
                const arr = availableLeaseLandIdList.filter(
                  (ids) => ids.slice(0, 3) == cat.landId.slice(0, 3)
                );
                console.log("arr", arr);
                availabelLeaseList[cat.ownerId] = arr;
              }
              // console.log(
              //   "avail",
              //   availabelLeaseOwnerIdList,
              //   availableLeaseLandIdList,
              //   availabelLeaseList
              // );
              // }
            }
            // console.log(
            //   "availabelLeaseList",
            //   availabelLeaseOwnerIdList,
            //   availableLeaseLandIdList
            // );
          });
          // );
        });
      }
    });
  } else {
    console.log("no");
  }

  const selectedId = Object.entries(availabelLeaseList);

  useEffect(() => {
    if (!supervisorID == "") {
      selectedId.map((val) => {
        if (val[0] == supervisorID) {
          setList(val[1]);
        }
        // console.log("1234567890", val[0], val[1], list);
      });
    }
  }, [supervisorID]);
  console.log(list);

  return (
    <div className={classes.login}>
      <form>
        <div>
          <input
            placeholder="Area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            type="number"
          />
        </div>

        <div>
          <select
            placeholder="category"
            value={interestedFor}
            onChange={(e) => setInterestedFor(e.target.value)}
          >
            <option value="choose"> category </option>
            <option value="ownFarming"> ownFarming </option>
            <option value="leasedLand"> leasedLand </option>
            <option value="wasteLand"> wasteLand </option>
            <option value="availableForLease"> availableForLease </option>
          </select>
        </div>

        <div>
          <select
            name="states"
            id="states"
            onChange={(e) => setAddOns(e.target.value)}
          >
            <option value="">addOn </option>
            {farmingList.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            name="states"
            id="states"
            onChange={(e) => setSupervisorID(e.target.value)}
          >
            <option value="">supervisorId </option>
            {Object.keys(availabelLeaseList).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            name="states"
            id="states"
            onChange={(e) => setLandid(e.target.value)}
          >
            <option value="">land Id </option>
            {list.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button onClick={submitHandler}>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Land;
