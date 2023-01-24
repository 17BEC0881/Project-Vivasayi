import React, { useState } from "react";
import axios from "axios";
import classes from "./land.module.css";
import { useEffect } from "react";
import LandTable from "./LandTable";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { landActions } from "../../store/landStore";
import { useSelector } from "react-redux";
import { Action } from "@remix-run/router";
import Layout from "../Layout/Layout";
import { GiDivingDagger } from "react-icons/gi";
// import AvailableLeaseTable from "./AvailableLeaseTable";

const Land = () => {
  const navigate = useNavigate();
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
    {
      farmerDetails: {
        whatsappNumber: 9629772452,
        farmerId: "SWE0007",
        nickName: "swe",
        farmerName: "swetha",
        age: 22,
        gender: "female",
        fatherName: "swetha",
        phoneNumber: 9629772452,
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
          ownerId: "SWE0007",
          category: "ownFarming",
          addons: "None",
          landId: "SWE0007001",
          area: 123,
        },
        {
          supervisorId: "",
          ownerId: "SWE0007",
          category: "availableForLease",
          addons: "None",
          landId: "SWE0007002",
          area: 100,
        },
      ],
      cropDetails: [],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
  ];

  const dispatch = useDispatch();
  const { landData } = useSelector((state) => state.land);
  const selected = useSelector((state) => state.land.selectedLand);
  // console.log(landData, "landdetails", selected[0].farmerid);
  const availabelLeaseOwnerIdList = [];
  const availableLeaseLandIdList = [];
  const availableLeaseFarmers = [];
  const availableLeaseList = [];

  const [area, setArea] = useState("");
  const [interestedFor, setInterestedFor] = useState("");
  const [addOns, setAddOns] = useState("None");
  const [supervisorID, setSupervisorID] = useState("");
  const [landId, setLandId] = useState("");
  const [list, setList] = useState([]);
  const [landid, setLandid] = useState();
  const leasedIdList = [];
  // console.log(landId, landid);
  //check
  const [ownFarmingCheck, setOwnFarmingCheck] = useState(false);
  const [takenLeaseCheck, setTakenLeaseCheck] = useState(false);
  const [initial, setInitial] = useState(false);

  // useEffect(() => {
  //   console.log("selected", selected);
  //   if (takenLeaseCheck) {
  //     setSupervisorID(selected[0].farmerid);
  //     setLandId(selected[0].landid);
  //     setInterestedFor(selected[0].category);
  //     setArea(selected[0].area);
  //   } else {
  //     setSupervisorID("");
  //     setLandId("");
  //     setInterestedFor("");
  //     setArea("");
  //   }
  // }, [takenLeaseCheck]);

  const farmingList = ["interestedToClean", "cleanupTOFarm", "None"];

  useEffect(() => {
    if (interestedFor == "") {
      setInitial(true);
      setOwnFarmingCheck(false);
      setTakenLeaseCheck(false);
    } else if (
      interestedFor === "ownFarming" ||
      interestedFor === "availableForLease" ||
      interestedFor === "wasteLand"
    ) {
      setInitial(false);
      setOwnFarmingCheck(true);
      setTakenLeaseCheck(false);
    } else if (interestedFor === "takenLease") {
      setInitial(false);
      setOwnFarmingCheck(false);
      setTakenLeaseCheck(true);
    }
  }, [interestedFor]);

  const { farmer_id } = useSelector((state) => state.farmer);
  console.log("farmerid", farmer_id);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(area, interestedFor, addOns, supervisorID);

    await axios({
      url: "https://66d4-49-204-138-29.in.ngrok.io/land/create",
      method: "post",
      data: {
        landDetails: [
          {
            // farmerId: farmer_id[0],
            farmerId: "SWE0004",
            area: area,
            category: interestedFor,
            addons: addOns,
            supervisorId: supervisorID,
          },
        ],
      },
    })
      .then((response) => {
        console.log("res", response.data);

        //DISPATCH TO LANDdATA
        const userData = {
          farmerId: farmer_id[0],
          landId: response.data.landId,
          area: area,
          category: interestedFor,
          addons: addOns,
          supervisorId: supervisorID,
        };

        dispatch(landActions.createLand(userData));
        navigate("/landtable");
      })
      .catch((error) => {
        console.log("err", error);
      });
    //without using api
  };

  useEffect(() => {
    console.log("innnnnnnnnnnn");
    const availableLeaseListTable = [];
    if (interestedFor === "takenLease") {
      console.log("interestedFor", interestedFor);
      //farmerDetails means full farmer details using api

      // axios({
      //   url: "https://bbeb-122-164-86-57.in.ngrok.io/farmer/all",
      //   method: "get",
      // })
      //   .then((response) => {
      //     console.log("response", response);
      //   })
      //   .catch((error) => {
      //     console.log("error", error);
      //   });

      farmerDetails.map((farmer) =>
        farmer.landDetails.map((land) => {
          if (land.category === "availableForLease") {
            availableLeaseListTable.push({
              name: farmer.farmerDetails.farmerName,
              fathername: farmer.farmerDetails.fatherName,
              area: land.area,
              farmerid: land.ownerId,
              landid: land.landId,
              category: interestedFor,
            });
            // dispatch(
            //   landActions.rentalUpdate({
            //     farmerId: farmer.farmerDetails.farmerId,
            //     landId: land.landId,
            //     ownerId: land.ownerId,
            //   })
            // );
          }
        })
      );
    } else if (
      interestedFor === "ownFarming" ||
      interestedFor === "wasteLand" ||
      interestedFor === "availableForLease"
    ) {
      //for other api
      // dispatch(
      //   landActions.createLand({
      //     farmerId: "JEY0001",
      //     area: area,
      //     category: interestedFor,
      //     addons: addOns,
      //     supervisorId: supervisorID,
      //   })
      // );
    }

    // console.log(availableLeaseListTable);

    // dispatch(landActions.updateLeaseLands(availableLeaseListTable));
  }, [interestedFor]);

  const landHandler = () => {
    setInterestedFor("takenLease");
    navigate("/selectlandtable");
  };

  const { selectedLand } = useSelector((state) => state.land);
  console.log(("selectedland", selectedLand));

  return (
    <Layout>
      <div className={classes.login}>
        <h1>Add Land</h1>
        {ownFarmingCheck && (
          <form>
            <div>
              <select
                placeholder="category"
                value={interestedFor}
                onChange={(e) => setInterestedFor(e.target.value)}
              >
                <option value="choose"> category </option>
                <option value="ownFarming"> ownFarming </option>
                <option value="wasteLand"> wasteLand </option>
                <option value="takenLease"> takenLease </option>
                <option value="availableForLease"> availableForLease </option>
              </select>
            </div>
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
              <input
                placeholder="supervisorID"
                value={supervisorID}
                onChange={(e) => setSupervisorID(e.target.value)}
              />
            </div>
            <div>
              <input
                placeholder="landID"
                value={landId}
                onChange={(e) => setLandId(e.target.value)}
              />
            </div>
            <div>
              <button onClick={submitHandler}>submit</button>
            </div>
          </form>
        )}

        {takenLeaseCheck && (
          <form>
            <div>
              <div>
                <select
                  placeholder="category"
                  value={interestedFor}
                  onChange={(e) => setInterestedFor(e.target.value)}
                >
                  <option value="choose"> category </option>
                  <option value="ownFarming"> ownFarming </option>
                  {/* <option value="leasedLand"> leasedLand </option> */}
                  <option value="wasteLand"> wasteLand </option>
                  <option value="takenLease"> takenLease </option>
                  <option value="availableForLease"> availableForLease </option>
                </select>
              </div>

              <div>
                <button type="button" onClick={landHandler}>
                  select land
                </button>
              </div>

              <div>
                <input
                  placeholder="Area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  type="number"
                />
              </div>

              <div>
                <input
                  placeholder="supervisorID"
                  value={supervisorID}
                  onChange={(e) => setSupervisorID(e.target.value)}
                />
                {/* <select
                  disabled
                  name="states"
                  id="states"
                  onChange={(e) => setAddOns(e.target.value)}
                >
                  <option value="">addOn </option>
                  {/* {farmingList.map((state) => ( */}
                {/* <option
                    key={selectedLand.landid}
                    value={selectedLand.farmerid}
                  >
                    {selectedLand.farmerid}
                  </option>
                  ))}
                </select> */}
              </div>

              <div>
                {/* <select
                  name="states"
                  id="states"
                  onChange={(e) => setSupervisorID(e.target.value)}
                >
                  <option value="">supervisorId </option>
                  {supervisor}
                  {/* {selected.map((state) => (
                    <option key={state.landid} value={state.landid}>
                      {state.farmerid}
                    </option>
                  ))} */}
                {/* </select> */}
              </div>

              <div>
                <input
                  placeholder="landID"
                  value={landId}
                  onChange={(e) => setLandId(e.target.value)}
                />
                {/* <select
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
                </select> */}
              </div>
              <div>
                <button onClick={() => submitHandler()}>submit</button>
              </div>
            </div>
          </form>
        )}
        {initial && (
          <form>
            <div>
              <select
                placeholder="category"
                value={interestedFor}
                onChange={(e) => setInterestedFor(e.target.value)}
              >
                <option value="choose"> category </option>
                <option value="ownFarming"> ownFarming </option>
                <option value="wasteLand"> wasteLand </option>
                <option value="takenLease"> takenLease </option>
                <option value="availableForLease"> availableForLease </option>
              </select>
            </div>
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
              <input
                placeholder="supervisorID"
                value={supervisorID}
                onChange={(e) => setSupervisorID(e.target.value)}
              />
            </div>
            <div>
              <input
                placeholder="landID"
                value={landId}
                onChange={(e) => setLandId(e.target.value)}
              />
            </div>
            <div>
              <button style={{ float: "left" }} onClick={submitHandler}>
                submit
              </button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default Land;
