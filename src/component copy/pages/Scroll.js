import ReactDOM from "react-dom";
import SimpleBarReact from "simplebar-react";
import classes from "./scroll.module.css";
import "simplebar/src/simplebar.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { landActions } from "../../store/landStore";
import { useNavigate } from "react-router-dom";

const Scroll = () => {
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
  const navigate = useNavigate();

  const { leaseLands } = useSelector((state) => state.land);
  console.log(leaseLands, "leaselands");

  const selectHandler = (id) => {
    console.log(id, "id");
    const selected = leaseLands.filter((landid) => landid.landid === id);
    console.log("selected", selected);
    dispatch(landActions.selectedRentalLand(selected));

    navigate("/selectlandpage");
  };

  return (
    <div className={classes.App}>
      <h1>SimpleBar React</h1>
      <SimpleBarReact autoHide={true} style={{ maxHeight: 500 }}>
        {/* {[...Array(50)].map((x, i) => (
          <p>{i}</p>
        ))} */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>FatherName</th>
              <th>Area</th>
              <th>Farmer Id</th>
              <th>Land Id</th>
              <th></th>
            </tr>
          </thead>
          {leaseLands.map((farmer) => (
            <tbody key={farmer.landid}>
              <tr key={farmer.landid}>
                <td>{farmer.name}</td>
                <td>{farmer.fathername}</td>
                <td>{farmer.area}</td>
                <td>{farmer.farmerid}</td>
                <td>{farmer.landid}</td>
                <td>
                  <button onClick={() => selectHandler(farmer.landid)}>
                    select
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </SimpleBarReact>
    </div>
  );
};

export default Scroll;

// function App() {
//   return (

//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
