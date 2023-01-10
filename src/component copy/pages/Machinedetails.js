import { useState } from "react";
import axios from "axios";
import classes from './Machinedetails.module.css';

const Machinedetails = () => {
    // const Attachments = ["Backhoe","Bedformer","Front Dozer","Furrower","Harvester","Planter","Trailer"]
    const [enteredType,setEnteredType] = useState('');
    const [enteredSubtype,setEnteredSubtype] = useState('');
    const [enteredAttachment,setEnteredAttachment] = useState('');
    const [enteredBrand,setEnteredBrand] = useState('');
    const [enteredCount,setEnteredCount] = useState('');
    const [enteredDay,setEnteredDay] = useState('');
    const [enteredRent,setEnteredRent] = useState('');
    const [Subtype,setSubtype] = useState([]);
    const [Attachment,setAttachment] = useState([]);

    const selectHandler = () => {
        if (enteredType === "Mowers") {
            setSubtype(["Push mowers","Cylinder mowers","Rotary mowers","Hover mowers","Self-propelled mowers","Bagging mowers","Mulching mowers","Others"]);
            setAttachment(["Aerators","Dethatchers","Lawn Rollers","Sprayers","Spreaders"]);
        } else if (enteredType === "Backhoe") {
            setSubtype(["Center Mount Backhoe","Sideshift Backhoe","Others"]);
            setAttachment(["Augers","Brooms","Buckets","Couplers","Grapples","Hammers","Rippers","Snowplows","Thumbs"]);
        } else if (enteredType === "Harrow") {
            setSubtype(["Disc harrows", "Tine harrows", "Spring-tooth harrows", "Drag harrows", "Spike harrows", "Chain harrows", "Chain-disk harrows", "Others"]);
            setAttachment(["TWO-BAR COIL TINE HARROW","THREE-ROW COIL TINE HARROW","THREE-ROW SPIKE DRAG HARROW","FINISHING REELS","REAR-TOW HITCH"])
        } else if (enteredType === "Cultivator") {
            setSubtype(["Shifting Cultivation", "Subsistence Farming", "Pastoralism", "Intensive Farming", "Others"]);
            setAttachment(["5 Tynes Power Tiller Cultivator","Rigid Cultivator","Nine Tyne Cultivator","Cultivator Box Type","7 Tyne soil Cultivator"]);
        } else if (enteredType === "Rake") {
            setSubtype(["Garden Rake","Landscape Rake","Thatch Rake","Lawn Rake","Leaf Rake","Leaf Scoop Rake","Shrub Rake","Stone Rake", "Others"]);
            setAttachment(["Edge-Pro 300","Fast Connect Rear","Frond & Mid","Standard Hitch Rear"]);
        } else if (enteredType === "Tractor") {
            setSubtype(["Utility Tractors","Row Crop Tractors","Garden Tractors","Orchard Type Tractors","Implement Carrier Tractors","Others"]);
            setAttachment(["Backhoe","Bedformer","Front Dozer","Furrower","Harvester","Planter","Trailer"])
        } else if (enteredType === "Combine Harvester") {
            setSubtype(["Control Combine Harvester","Self-Propelled Combine Harvester","Others"]);
            setAttachment(["Cerio","Vario","Maxflex","Convio","Corio","Folding cutterbars"]);
        } else if (enteredType === "Sprayers") {
            setSubtype(["Knapsack Sprayer","Portable Power Sprayer","Knapsack Power Sprayer","Mist Dust Sprayer","HTP Sprayers","Orchard Sprayers","Others"]);
            setAttachment(["Dribble bar", "Spray boom covers", "Telescopic lances", "Hand lance shrouds", "Vertical spray frames"])
        } else if (enteredType === "Chain Saw") {
            setSubtype(["Manual / Pocket Chainsaws","Battery-powered Chainsaws","Corded-electric Chainsaws","Gas-powered Chainsaws","Pole Chainsaws","Pneumatic Chainsaws","Others"]);
            setAttachment(["Chainsaw stump grinder","Bow chainsaw"])        
        } else if (enteredType === "Brush cutters") {
            setSubtype(["Handheld", "Walk-behind", "Tow-behind","Others"]);
            setAttachment(["Brush Cutter Weeder Attachment","Brush Cutter Trimmer Attachment","Brush Cutter Tiller Attachment","Brush Cutter Waterpump Attachment","Brush Cutter Power Hoe Attachment"])
        } else if (enteredType === "Saw Mills") {
            setSubtype(["Band sawmill", "Circular sawmill", "Double band sawmill", "Horizontal sawmill","Others"]);
            setAttachment(["Clip-On Slabber","Planer Blade","Sander Disc","Electric Winch","Track Extensions"])
        }
    };
    
    const saveHandler = async (e) => {
        e.preventDefault();
        
        const inputdata = {
            farmerId: "AIS0004",
            type: enteredType,
            subType: enteredSubtype,
            attachments: enteredAttachment,
            brand: enteredBrand,
            count: enteredCount,
            rentalBasis: enteredDay,
            rent: enteredRent
        };
        console.log("data",inputdata);
        await axios.put(" https://f223-49-204-138-20.in.ngrok.io/machinery/",{ machineDetails : [inputdata] })
        .then((response) => {
            console.log(response);
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
    };

    return (
        <section className={classes.box}>
            <form>
            <h3>Machine Details</h3>
            <select name="type" id="type" value={enteredType} onChange={(e) => setEnteredType(e.target.value)} onClick={selectHandler}>
                    <option value="type">Type</option>
                    <option value="Mowers">Mowers</option>
                    <option value="Backhoe">Backhoe</option>
                    <option value="Harrow">Harrow</option>
                    <option value="Cultivator">Cultivator</option>
                    <option value="Rake">Rake</option>
                    <option value="Tractor">Tractor</option>
                    <option value="Combine Harvester">Combine Harvester</option>
                    <option value="Sprayers">Sprayers</option>
                    <option value="Chain Saw">Chain Saw</option>
                    <option value="Brush cutters">Brush cutters</option>
                    <option value="Saw Mills">Saw Mills</option>
                    <option value="Others">Others</option>
            </select>
            <select name="subtype" id="subtype" value={enteredSubtype} onChange={(e) => setEnteredSubtype(e.target.value)}>
                    <option value="sub-type">Sub-type</option>
                    {Subtype.map( (x,y) => 
                    <option key={y} value={x}>{x}</option> )}
            </select>
            <select name="attach" id="attach" value={enteredAttachment} onChange={(e) => setEnteredAttachment(e.target.value)}>
                    <option value="type">Attachments</option>
                    {Attachment.map( (x,y) => 
                    <option key={y} value={x}>{x}</option> )}
            </select>
            <input type="text" name="brand" id="brand" placeholder="Brand" value={enteredBrand} onChange={(e) => setEnteredBrand(e.target.value)}/>
            <input type="text" name="count" id="count" placeholder="Count" value={enteredCount} onChange={(e) => setEnteredCount(e.target.value)}/>
            <select name="rentalbasics" id="rentalbasics" value={enteredDay} onChange={(e) => setEnteredDay(e.target.value)}>
                    <option value="Rental Basics">Rental Basics</option>
                    <option value="Hour">Hour</option>
                    <option value="Day">Day</option>
                    <option value="Area">Area</option>
            </select>
            <input type="number" name="rent" id="rent" placeholder="Rent Price" value={enteredRent} onChange={(e) => setEnteredRent(e.target.value)}/>
            <button type="submit" onClick={saveHandler}>Save</button>
            </form>
        </section>
    );
};

export default Machinedetails;