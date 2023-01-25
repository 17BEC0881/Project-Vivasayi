import { useEffect, useState } from "react";
import axios from "axios";
import { FcCheckmark } from "react-icons/fc";
import { IoIosMan } from "react-icons/io";
import { ImWoman } from "react-icons/io";
import classes from "./LabourWorkForm.module.css";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";

const LabourWorkForm = () => {
  // const [input, setInput] = useState({
  //   "labourDetails": [
  //       {

  //           "landPlowing": '',
  //           "landPlowingWithTractor": '',
  //           "fertilization": '',
  //           "weedRemoving": '',
  //           "pesticideSpraying": '',
  //           "handHarvesting": '',
  //           "cropSpanking": '',
  //           "pumpsetDuty": '',
  //           "landCleaning": '',
  //           "treeClimbing": '',
  //           "paddySteaming": ''
  //       }
  //   ]
  // })
  const [labour, setLabour] = useState("");
  const [landPlowing, setLandPlowing] = useState(false);
  const [landPlowingWithTractor, setLandPlowingWithTractor] = useState(false);
  const [fertilization, setFertilization] = useState(false);
  const [weedRemoving, setWeedRemoving] = useState(false);
  const [pesticideSpraying, setPesticideSpraying] = useState(false);
  const [handHarvesting, setHandHarvesting] = useState(false);
  const [cropSpanking, setCropSpanking] = useState(false);
  const [pumpsetDuty, setPumpsetDuty] = useState(false);
  const [landCleaning, setlandCleaning] = useState(false);
  const [treeClimbing, setTreeClimbing] = useState(false);
  const [paddySteaming, setPaddyStreaming] = useState(false);
  const [others, setOthers] = useState(false);
  const navigate = useNavigate();

  const [farmerId, setFarmerId] = useState("MAH0006");

  // const [inputValue, setInputValue] = useState('')
  // const[res, setRes] = useState()
  // const [icon, setIcon] = useState();

  const laborWork = [
    "landPlowing",
    "landPlowingWithTractor",
    "fertilization",
    "weedRemoving",
    "pesticideSpraying",
    "handHarvesting",
    "cropSpanking",
    "pumpsetDuty",
    "landCleaning",
    "treeClimbing",
    "paddySteaming",
  ];

  // const [Value,setValue] = useState([]);
  // const[Item, setItem] = useState()
  // const[val, setVal]=useState()
  const [Value, setValue] = useState([]);
  const [input, setInput] = useState();

  const changeHandler = (event) => {
    event.preventDefault();
    var getvalue = event.target.value;

    var duplicate = Value.includes(getvalue);
    //const value = [...input, event.target.value]
    setInput(duplicate);
    if (duplicate === false) {
      setValue((prevValue) => {
        return [...prevValue, getvalue];
      });
    } else {
      setValue((prevValue) => {
        return [...prevValue];
      });
      alert("Already exist!");
    }
    console.log(Value);
  };

  // useEffect(()=>{
  //         // const data =
  //         Value.map((work)=>{
  //                 console.log("work",work);
  //                 if(work == "landPlowing"){
  //
  //                         setLandPlowing(!landPlowing)
  //                 }
  //                  if(work == 'fertilization'){
  //                         setFertilization(!fertilization)
  //                 }
  //                 if(work == 'landPlowingWithTractor'){
  //                         setLandPlowingWithTractor(!landPlowingWithTractor)
  //                 }
  //                 if(work == 'weedRemoving'){
  //                         setWeedRemoving(!weedRemoving)
  //                 }
  //                 if(work == 'pesticideSpraying'){
  //                         setPesticideSpraying(!pesticideSpraying)
  //                 }
  //                 if(work == 'handHarvesting'){
  //                         setHandHarvesting(!handHarvesting)
  //                 }
  //                  if(work == 'cropSpanking'){
  //                         setCropSpanking(!cropSpanking)
  //                 }
  //                  if(work == 'pumpsetDuty'){
  //                         setPumpsetDuty(!pumpsetDuty)
  //                 }
  //                   if(work == 'landCleaning'){
  //                         setlandCleaning(!landCleaning)
  //                 }
  //                  if(work == 'treeClimbing'){
  //                         setTreeClimbing(!treeClimbing)
  //                 }
  //                   if(work == 'paddySteaming'){
  //                         setPaddyStreaming(!paddySteaming)
  //                 }
  //         })
  //  }, [Value])
  useEffect(() => {
    // const data =
    Value.map((work) => {
      // let item = sessionStorage.setItem( 'work', work)
      //let getItem = sessionStorage.getItem(work)
      // console.log("work",item);
      if (work == "landPlowing") {
        setLandPlowing(!landPlowing);
      }
      if (work == "fertilization") {
        setFertilization(!fertilization);
      }
      if (work == "landPlowingWithTractor") {
        setLandPlowingWithTractor(!landPlowingWithTractor);
      }
      if (work == "weedRemoving") {
        setWeedRemoving(!weedRemoving);
      }
      if (work == "pesticideSpraying") {
        setPesticideSpraying(!pesticideSpraying);
      }
      if (work == "handHarvesting") {
        setHandHarvesting(!handHarvesting);
      }
      if (work == "cropSpanking") {
        setCropSpanking(!cropSpanking);
      }
      if (work == "pumpsetDuty") {
        setPumpsetDuty(!pumpsetDuty);
      }
      if (work == "landCleaning") {
        setlandCleaning(!landCleaning);
      }
      if (work == "treeClimbing") {
        setTreeClimbing(!treeClimbing);
      }
      if (work == "paddySteaming") {
        setPaddyStreaming(!paddySteaming);
      }
    });
  }, [Value, ...Value]);
  // console.log('data', data)

  const labourData = [
    {
      farmerId: farmerId,
      landPlowing: landPlowing,
      landPlowingWithTractor: landPlowingWithTractor,
      fertilization: fertilization,
      weedRemoving: weedRemoving,
      pesticideSpraying: pesticideSpraying,
      handHarvesting: handHarvesting,
      cropSpanking: cropSpanking,
      pumpsetDuty: pumpsetDuty,
      landCleaning: landCleaning,
      treeClimbing: treeClimbing,
      paddySteaming: paddySteaming,
    },
  ];
  console.log("labourData", labourData);

  const submitHandler = (event) => {
    event.preventDefault();

    // axios
    //   .post("https://5cbc-122-164-81-58.in.ngrok.io/labour/create", {
    //     labourDetails: labourData,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    navigate("/livestock");
  };

  return (
    <Layout>
      <div className={classes.labour}>
        <form className={classes.forms}>
          <h1>Labour Work Details</h1>
          {/* <label>Choose the Gender :</label> */}

          {/* <select
                placeholder="category"
                value={interestedFor}
                onChange={(e) => setInterestedFor(e.target.value)}
              >
                <option value="choose"> category </option>
                <option value="ownFarming"> ownFarming </option>
                <option value="leasedLand"> leasedLand </option>
                <option value="wasteLand"> wasteLand </option>
                <option value="takenLease"> takenLease </option>
                <option value="availableForLease"> availableForLease </option>
              </select> */}
          <select
            name="labour"
            value={labour}
            onChange={(event) => setLabour(event.target.value)}
          >
            <option value="Choose the Gender">Choose the Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>

          {/* <label>Choose the labour field : </label> */}

          <select name="inputValue" onChange={changeHandler}>
            <option value="choose labour work">Choose the labour field</option>
            <option value="landPlowing">landPlowing</option>
            <option value="landPlowingWithTractor">
              landPlowingWithTractor
            </option>
            <option value="fertilization">fertilization</option>
            <option value="weedRemoving">weedRemoving</option>
            <option value="pesticideSpraying">pesticideSpraying</option>
            <option value="handHarvesting">handHarvesting</option>
            <option value="cropSpanking">cropSpanking</option>
            <option value="pumpsetDuty">pumpsetDuty</option>
            <option value="landCleaning">landCleaning</option>
            <option value="treeClimbing">treeClimbing</option>
            <option value="paddySteaming">paddySteaming</option>
          </select>
        </form>
        {/* <h3>GENDER: {labour}</h3> */}

        {/* <div className={classes.display}>
          {Value.map((input, id) => {
            return (
              <div className={classes.input}>
                <li key={input}>
                  <FcCheckmark />
                  {input}
                </li>
              </div>
            );
          })}
        </div> */}
        <button onClick={submitHandler}>Submit</button>
      </div>
    </Layout>
  );
};
export default LabourWorkForm;

// {
//   /* <h2>Fields</h2>
//         <label>
//         Land plowing:
// <input type='checkbox' name='landPlowing' value={landPlowing}   onChange={()=> setLandPlowing(!landPlowing)}/>

// </label>

// <label>
// Land plowing with tractor

// <input type='checkbox' name='landPlowingWithTractor' value={landPlowingWithTractor} onChange={()=> setLandPlowingWithTractor(!landPlowingWithTractor)}/>
// </label>

// <label>

// Fertilization
// <input type='checkbox' name='fertilization' value={fertilization} onChange={()=> setFertilization(!fertilization)}/>
// </label>
// <label>

// Weed removing
// <input type='checkbox' name='weedRemoving' value={weedRemoving} onChange={()=> setWeedRemoving(!weedRemoving)}/>
// </label>
// <label>

// Pesticide spraying
// <input type='checkbox' name='pesticideSpraying' value={pesticideSpraying} onChange={()=> setPesticideSpraying(!pesticideSpraying)}/>
// </label>
// <label>

// Hand harvesting
// <input type='checkbox' name='handHarvesting' value={handHarvesting} onChange={()=> setHandHarvesting(!handHarvesting)}/>
// </label>
// <label>

// Crop spanking
// <input type='checkbox' name='cropSpanking' value={cropSpanking} onChange={()=> setCropSpanking(!cropSpanking)}/>
// </label>

// <label>

// Pumpset duty
// <input type='checkbox' name='pumpsetDuty' value={pumpsetDuty} onChange={()=> setPumpsetDuty(!pumpsetDuty)}/>
// </label>
// <label>

// Land cleaning
// <input type='checkbox' name='landCleaning' value={landCleaning} onChange={()=> setlandCleaning(!landCleaning)}/>
// </label>
// <label>

// Tree climbing
// <input type='checkbox' name='treeClimbing' value={treeClimbing} onChange={()=> setTreeClimbing(!treeClimbing)}/>
// </label>

// <label>

// Paddy Steaming
// <input type='checkbox' name='paddySteaming' value={paddySteaming} onChange={()=> setPaddyStreaming(!paddySteaming)}/>
// </label>

// <label>

// Others
// <input type='checkbox'name='others' value={others} onChange={()=> setOthers(!others)}/>
// </label> */
// }
