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
        whatsappNumber: 9500412392,
        farmerId: "ABI0020",
        nickName: "ara",
        farmerName: "abi ara",
        age: 23,
        gender: "Female",
        fatherName: "abi ara",
        phoneNumber: 9500412392,
        state: "Tamil Nadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudhumadam",
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
        residentialType: "Local",
        whatsappNumber: 9500412398,
        farmerId: "ABI0021",
        nickName: "arav",
        farmerName: "abi ara",
        age: 24,
        gender: "Female",
        fatherName: "abi ara",
        phoneNumber: 9500412398,
        state: "Tamil Nadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudhumadam",
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
          treeClimbing: true,
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
        residentialType: "Local",
        whatsappNumber: 9500412327,
        farmerId: "ABI0022",
        nickName: "ara",
        farmerName: "abi ara",
        age: 24,
        gender: "Female",
        fatherName: "abi ara",
        phoneNumber: 9500412327,
        state: "Tamil Nadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudhumadam",
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
      gardenDetails: [
        {
          type: "345",
          name: "tr",
          variety: "rere",
          brand: "re",
          area: 54,
          count: 43,
          organic: true,
          age: 43,
          sellingPeriod: "4fd",
        },
      ],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        residentialType: "Local",
        whatsappNumber: 9500412311,
        farmerId: "ABI0023",
        nickName: "ara",
        farmerName: "abi ara",
        age: 23,
        gender: "Female",
        fatherName: "abi ara",
        phoneNumber: 9500412311,
        state: "Tamil Nadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudhumadam",
        village: "Ammapattinam",
        organic: false,
        singleSeed: false,
        altCrop: false,
        seedVariety: false,
        leaseOwnLand: false,
        farmRentedLand: false,
      },
      livestockDetails: [
        {
          type: "ad",
          breed: "adadada",
          name: "ad",
          count: 2711,
          season: "ad",
        },
      ],
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
      gardenDetails: [
        {
          type: "43",
          name: "balaji",
          variety: "te",
          brand: "er",
          area: 43,
          count: 9,
          organic: true,
          age: 2711,
          sellingPeriod: "dgf",
        },
        {
          type: "fe",
          name: "abii",
          variety: "we",
          brand: "we",
          area: 98,
          count: 32,
          organic: true,
          age: 32,
          sellingPeriod: "32",
        },
      ],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        residentialType: "Local",
        whatsappNumber: 9876543210,
        farmerId: "HAN0002",
        nickName: "Hanish",
        farmerName: "Hanish",
        age: 11,
        gender: "Male",
        fatherName: "Hanish",
        phoneNumber: 9876543210,
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
      livestockDetails: [
        {
          type: "KYU",
          breed: "KYUG",
          name: "MJGJ",
          count: 9789,
          season: "HG",
        },
      ],
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
          ownerId: "HAN0002",
          category: "availableForLease",
          addons: "None",
          landId: "HAN0002001",
          area: 102,
        },
        {
          supervisorId: "HAN0002",
          ownerId: "JEY0001",
          category: "takenLease",
          landId: "JEY0001001",
          area: 102,
          addons: "None",
        },
      ],
      cropDetails: [
        {
          type: "Wetland",
          name: "Rice",
          variety: "Green Rice",
          brand: "BRDL",
          area: 9,
          croppedAt: "2023-06-17",
          organic: true,
          seedingType: "Seeded",
          harvestPeriod: "6 Months",
        },
      ],
      gardenDetails: [
        {
          type: "GD",
          name: "KL",
          variety: "LK",
          brand: "LKlk",
          area: 45,
          count: 53,
          organic: true,
          age: 54,
          sellingPeriod: "76",
        },
        {
          type: "H",
          name: "IU",
          variety: "IUN",
          brand: "HJHJ",
          area: 43,
          count: 987,
          organic: true,
          age: 98,
          sellingPeriod: "HJHJ",
        },
        {
          type: "FGD",
          name: "FD",
          variety: "FD",
          brand: "FD",
          area: 435,
          count: 98,
          organic: true,
          age: 98,
          sellingPeriod: "KJ",
        },
        {
          type: "HHJ",
          name: "JHJ",
          variety: "KUYJ",
          brand: "YUH",
          area: 89,
          count: 98,
          organic: true,
          age: 98,
          sellingPeriod: ".KJKJ",
        },
      ],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        residentialType: "Local",
        whatsappNumber: 7092660353,
        farmerId: "JEY0001",
        nickName: "Hanish",
        farmerName: "Jeyendran",
        age: 11,
        gender: "Male",
        fatherName: "Jeyendran",
        phoneNumber: 7092660353,
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
      livestockDetails: [
        {
          type: "FD",
          breed: "KJDF",
          name: "HJB",
          count: 7,
          season: "FD",
        },
        {
          type: "LK",
          breed: "HJ",
          name: "HKJ",
          count: 87,
          season: "LK",
        },
        {
          type: "DS",
          breed: "879",
          name: "FDW",
          count: 987,
          season: "SF",
        },
        {
          type: "DS",
          breed: "SD",
          name: "SD",
          count: 32,
          season: "SD",
        },
        {
          type: "LK",
          breed: "K",
          name: "LK",
          count: 98,
          season: "LK",
        },
      ],
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
      machineDetails: [
        {
          rentalBasis: "Hour",
          rent: 900,
          count: 1,
          brand: "Mahindra",
          attachments: "Fast Connect Rear",
          subType: "Lawn Rake",
          type: "Rake",
        },
      ],
      landDetails: [
        {
          supervisorId: "HAN0002",
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
      ],
      cropDetails: [
        {
          type: "Wetland",
          name: "rice",
          variety: "rice",
          brand: "BRDL",
          area: 10,
          croppedAt: "2023-01-20",
          organic: true,
          seedingType: "Seeded",
          harvestPeriod: "4 Months",
        },
      ],
      gardenDetails: [
        {
          type: "H",
          name: "IU",
          variety: "IUN",
          brand: "HJHJ",
          area: 2711,
          count: 987,
          organic: true,
          age: 98,
          sellingPeriod: "HJHJ",
        },
        {
          type: "HHJ",
          name: "JHJ",
          variety: "KUYJ",
          brand: "YUH",
          area: 89,
          count: 98,
          organic: true,
          age: 98,
          sellingPeriod: ".KJKJ",
        },
        {
          type: "HHJ",
          name: "JHJ",
          variety: "KUYJ",
          brand: "YUH",
          area: 89,
          count: 98,
          organic: true,
          age: 98,
          sellingPeriod: ".KJKJ",
        },
      ],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        residentialType: "Local",
        whatsappNumber: 9790435631,
        farmerId: "NIS0019",
        nickName: "V",
        farmerName: "Nisha",
        age: 21,
        gender: "Male",
        fatherName: "Nisha",
        phoneNumber: 9790435631,
        state: "Tamil Nadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudhumadam",
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
      machineDetails: [
        {
          rentalBasis: "Hour",
          rent: 8900,
          count: 1,
          brand: "Mahindra",
          attachments: "Brush Cutter Tiller Attachment",
          subType: "Walk-behind",
          type: "Brush cutters",
        },
      ],
      landDetails: [
        {
          supervisorId: "",
          ownerId: "NIS0019",
          category: "availableForLease",
          addons: "None",
          landId: "NIS0019001",
          area: 102,
        },
        {
          supervisorId: "SWE0004",
          ownerId: "NIS0019",
          category: "leasedLand",
          addons: "None",
          landId: "NIS0019002",
          area: 102,
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
        whatsappNumber: 9784635271,
        farmerId: "SWE0004",
        nickName: "swe",
        farmerName: "Swetha",
        age: 23,
        gender: "Female",
        fatherName: "karunanithi",
        phoneNumber: 9784635271,
        state: "Tamil Nadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudhumadam",
        village: "Ammapattinam",
        organic: false,
        singleSeed: false,
        altCrop: false,
        seedVariety: false,
        leaseOwnLand: false,
        farmRentedLand: true,
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
      machineDetails: [
        {
          rentalBasis: "Day",
          rent: 7000,
          count: 1,
          brand: "Mahindra",
          attachments: "Brush Cutter Weeder Attachment",
          subType: "Walk-behind",
          type: "Brush cutters",
        },
        {
          rentalBasis: "Hour",
          rent: 1200,
          count: 1,
          brand: "Mahindra",
          attachments: "Couplers",
          subType: "Sideshift Backhoe",
          type: "Backhoe",
        },
      ],
      landDetails: [
        {
          supervisorId: "",
          ownerId: "SWE0004",
          category: "ownFarming",
          addons: "None",
          landId: "SWE0004001",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "SWE0004",
          category: "wasteLand",
          addons: "None",
          landId: "SWE0004002",
          area: 103,
        },
        {
          supervisorId: "",
          ownerId: "SWE0004",
          category: "availableForLease",
          addons: "None",
          landId: "SWE0004003",
          area: 103,
        },
        {
          supervisorId: "",
          ownerId: "SWE0004",
          category: "availableForLease",
          addons: "None",
          landId: "SWE0004004",
          area: 103,
        },
        {
          supervisorId: "",
          ownerId: "SWE0004",
          category: "ownFarming",
          addons: "None",
          landId: "SWE0004005",
          area: 100,
        },
        {
          supervisorId: "SWE0004",
          ownerId: "NIS0019",
          category: "takenLease",
          landId: "NIS0019002",
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
  const navigate = useNavigate();
  const availabelLeaseList = [];

  const { leaseLands } = useSelector((state) => state.land);
  console.log(leaseLands, "leaselands");

  farmerDetails.map((farmer) =>
    farmer.landDetails.map((land) => {
      console.log(land.category);
      if (land.category === "availableForLease") {
        const data = {
          landid: land.landId,
          name: farmer.farmerDetails.farmerName,
          fathername: farmer.farmerDetails.fatherName,
          ownerid: land.ownerId,
          area: land.area,
          category: land.category,
          farmerid: farmer.farmerDetails.farmerId,
        };
        availabelLeaseList.push(data);
        console.log("landdetails", availabelLeaseList);
      } else {
        return "";
      }
    })
  );

  const selectHandler = (id) => {
    console.log(id, "id");
    const selected = availabelLeaseList.filter(
      (landid) => landid.landid === id
    );
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
          {availabelLeaseList.map((land) => (
            <tbody key={land.landid}>
              <tr key={land.landid}>
                <td>{land.name}</td>
                <td>{land.fathername}</td>
                <td>{land.area}</td>
                <td>{land.ownerid}</td>
                <td>{land.landid}</td>
                <td>
                  <button onClick={() => selectHandler(land.landid)}>
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
