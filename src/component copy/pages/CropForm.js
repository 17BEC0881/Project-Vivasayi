import classes from "./CropForm.module.css";
import { useState } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";

const CropForm = () => {
  const navigate = useNavigate();
  const [inputdata, setInputData] = useState([]);

  const [farmerId, setFarmerId] = useState("SWE0003");
  const [area, setArea] = useState();
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [variety, setVariety] = useState("");
  const [brand, setBrand] = useState("");
  const [cropedAt, setCropedAt] = useState("");
  const [organic, setOrganic] = useState(false);
  const [seedingType, setSeedingType] = useState("");
  var [harvestPeriod, setHarvestPeriod] = useState("");

  const [num, setNum] = useState();
  const [text, setText] = useState();

  harvestPeriod = num + " " + text;

  console.log("t", harvestPeriod);

  const [tableDetail, setTableDetail] = useState();
  const [error, setError] = useState();
  const [show, setShow] = useState(false);

  const data = [
    {
      farmerId: farmerId,
      area: +area,
      type: type,
      name: name,
      variety: variety,
      brand: brand,
      croppedAt: cropedAt,
      organic: organic,
      seedingType: seedingType,
      harvestPeriod: harvestPeriod,
    },
  ];

  console.log("data", data);

  const submitHandler = (event) => {
    event.preventDefault();

    console.log("data", data);

    const val = {
      name,
      type,
      organic,
      harvestPeriod,
      area,
      farmerId,
      brand,
      cropedAt,
      seedingType,
    };

    const table = [...data, val];
    console.log("table", table);
    setInputData(table);

    // axios
    //   .post(
    //     "http://14bf-2402-3a80-1826-d32b-65d6-1e76-51a6-836b.in.ngrok.io/crop/create",
    //     { cropDetails: data }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    navigate("/garden");
  };
  console.log("inputData", inputdata);

  return (
    <Layout>
      <div className={classes.div}>
        <h1>Add Crop </h1>

        <form className={classes.crop_form}>
          <select
            value={type}
            name="type"
            onChange={(event) => setType(event.target.value)}
          >
            <option value="">Select Type of Land </option>
            <option value="DryLand">Dryland</option>
            <option value="Wetland">Wetland</option>
          </select>

          <input
            placeholder="Crop Name"
            type="text"
            value={name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />

          <input
            type="text"
            placeholder="Crop type"
            value={variety}
            name="variety"
            onChange={(event) => setVariety(event.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Brand"
            value={brand}
            name="brand"
            onChange={(event) => setBrand(event.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Area"
            value={area}
            name="area"
            onChange={(event) => setArea(event.target.value)}
          />

          <div className={classes.drop}>
            <input
              type="number"
              value={num}
              onChange={(event) => setNum(event.target.value)}
              placeholder="Harvesting period"
            />
            <select
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Select  Period"
            >
              <option value="">Select Period</option>
              <option value="Days">Days</option>
              <option value="Weeks">Weeks</option>

              <option value="Months">Months</option>
            </select>
          </div>

          <input
            type="date"
            id="date"
            placeholder="Cropped at (Starting date)"
            name="cropedAt"
            value={cropedAt}
            onChange={(event) => setCropedAt(event.target.value)}
          />

          <select
            value={seedingType}
            name="seedingType"
            onChange={(event) => setSeedingType(event.target.value)}
          >
            <option value=""> Planted / Seeded</option>
            <option value="Planted">Planted</option>

            <option value="Seeded">Seeded</option>
          </select>
        </form>

        <div className={classes.check}>
          <label for="checkbox">Organic:</label>
          <input
            type="checkbox"
            value={organic}
            name="organic"
            onChange={() => setOrganic(!organic)}
          />
        </div>

        <button onClick={submitHandler} className={classes.btn}>
          SUBMIT
        </button>
        {/* <div>
<button className={classes.btn1}  onClick={showHandler}>Save</button>
<button className={classes.btn2} > Next</button>
</div> */}
      </div>
    </Layout>
  );
};

export default CropForm;
