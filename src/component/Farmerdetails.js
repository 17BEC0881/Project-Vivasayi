import classes from './Farmerdetails.module.css';
import { useState } from 'react';
import { CREATE_FARMER } from '../store/action';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Farmerdetails = () => {
    const dispatch = useDispatch();
    const [state,setState] = useState([]);
    const [district,setDistrict] = useState([]);
    const [union,setUnion] = useState([]);
    const [panchayat,setPanchayat] = useState([]);
    const [village,setVillage] = useState([]);
    const [enteredname,setEnteredName] = useState('');
    const [enterednickname,setEnteredNickname] = useState('');
    const [enteredfathername,setEnteredFathername] = useState('');
    const [enteredgender,setEnteredGender] = useState('');
    const [enteredage,setEnteredAge] = useState('');
    const [enteredcontact,setEnteredContact] = useState('');
    const [enteredwhatsapp,setEnteredWhatsapp] = useState('');
    const [enteredperson,setEnteredPerson] = useState('');
    const [enteredstate,setEnteredState] = useState('');
    const [entereddistrict,setEnteredDistrict] = useState('');
    const [enteredunion,setEnteredUnion] = useState('');
    const [enteredpanchayat,setEnteredPanchayat] = useState('');
    const [enteredvillage,setEnteredVillage] = useState('');

    const stateHandler = async (event) => {
        event.preventDefault();
        await axios.get('http://192.168.0.103:8000/farmer/states')
        .then((response) => {
            console.log(response);
            if (response) {
                setState(response.data);
            }  
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
    console.log("new",state);
    console.log("old",enteredstate);
    for(let i=0;i<state.length;i++){
        if(enteredstate === state[i]) {
            var state_val = (state[i]);
            // console.log("up",updated);
        }
    }

    const districtHandler = async (event) => {
        event.preventDefault();
        await axios.get(`http://192.168.0.103:8000/farmer/districts/?state=${state_val}`)
        .then((response) => {
            console.log(response);
            if (response) {
                setDistrict(response.data);
            }  
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
    for(let i=0;i<district.length;i++){
        if(entereddistrict === district[i]) {
            var district_val = (district[i]);
            // console.log("up",district_val);
        }
    }

    const unionHandler = async (event) => {
        event.preventDefault();
        await axios.get(`http://192.168.0.103:8000/farmer/unions/?district=${district_val}`)
        .then((response) => {
            console.log(response);
            if (response) {
                setUnion(response.data);
            }  
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
    for(let i=0;i<union.length;i++){
        if(enteredunion === union[i]) {
            var union_val = (union[i]);
            // console.log("up",union_val);
        }
    }

    const panchayatHandler = async (event) => {
        event.preventDefault();
        await axios.get(`http://192.168.0.103:8000/farmer/panchayats/?union=${union_val}`)
        .then((response) => {
            console.log(response);
            if (response) {
                setPanchayat(response.data); 
            }  
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
    for(let i=0;i<panchayat.length;i++){
        if(enteredpanchayat === panchayat[i]) {
            var panchayat_val = (panchayat[i]);
            console.log("up",panchayat_val);
        }
    }

    const villageHandler = async (event) => {
        event.preventDefault();
        await axios.get(`http://192.168.0.103:8000/farmer/villages/?panchayat=${panchayat_val}`)
        .then((response) => {
            console.log(response);
            if (response) {
                setVillage(response.data);
            }  
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

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            name:enteredname,
            nickname:enterednickname,
            father:enteredfathername,
            gender:enteredgender,
            age:enteredage,
            contact:enteredcontact,
            whatsapp:enteredwhatsapp,
            person:enteredperson,
            state:enteredstate,
            district:entereddistrict,
            union:enteredunion,
            panchayat:enteredpanchayat,
            village:enteredvillage
        };
        console.log("data",data);
        dispatch ({
            type:CREATE_FARMER,
            payload:data,
        })
    };

    return (
        <section className={classes.box}>
            <form>
                <h3>Farmer Details</h3>
                <label>Name</label>
                <input name="name" id="name" type="text" value={enteredname} onChange={(e) => setEnteredName(e.target.value)}/>
                <label>Nickname</label>
                <input name="nickname" id="nickname" type="text" value={enterednickname} onChange={(e) => setEnteredNickname(e.target.value)}/>
                <label>Father/Husband's name</label>
                <input name="fathername" id="fathername" type="text" value={enteredfathername} onChange={(e) => setEnteredFathername(e.target.value)} />
                <label>Gender</label>
                <select name="gender" id="gender" value={enteredgender} onChange={(e) => setEnteredGender(e.target.value)}>
                    <option value="Gender">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label>Age</label>
                <input name="age" id="age" type="number" value={enteredage} onChange={(e) => setEnteredAge(e.target.value)}/>
                <label>Contact number</label>
                <input name="con_num" id="con_num" type="tel" value={enteredcontact} onChange={(e) => setEnteredContact(e.target.value)}/>
                <label>Whatsapp number</label>
                <input name="w_num" id="w_num" type="tel" value={enteredwhatsapp} onChange={(e) => setEnteredWhatsapp(e.target.value)} />
                <label>Local person/Foreigner</label>
                <select name="person" id="person" value={enteredperson} onChange={(e) => setEnteredPerson(e.target.value)}>
                    <option value="Local person/Foreigner">Local person/Foreigner</option>
                    <option value="local">Local Person</option>
                    <option value="foreigner">Outsider</option>
                </select>
                <label>State</label> 
                <select name="state" id="state" value={enteredstate} onChange={(e) => setEnteredState(e.target.value)} onClick={stateHandler}>
                    <option defaultValue>Choose the State</option>
                    {state.map( (x) => 
                    <option value={x}>{x}</option> )}
                </select>  
                <label>District</label>
                <select name="district" id="district" value={entereddistrict} onChange={(e) => setEnteredDistrict(e.target.value)} onClick={districtHandler}>
                    <option defaultValue>Choose the District</option>
                    {district.map( (x) => 
                    <option value={x}>{x}</option> )}
                </select> 
                <label>Union</label>
                <select name="union" id="union" value={enteredunion} onChange={(e) => setEnteredUnion(e.target.value)} onClick={unionHandler}>
                    <option defaultValue>Choose the Union</option>
                    {union.map( (x) => 
                    <option value={x}>{x}</option> )}
                </select> 
                <label>Panchayat</label>
                <select name="panchayat" id="panchayat" value={enteredpanchayat} onChange={(e) => setEnteredPanchayat(e.target.value)} onClick={panchayatHandler}>
                    <option defaultValue>Choose the Panchayat</option>
                    {panchayat.map( (x) => 
                    <option value={x}>{x}</option> )}
                </select> 
                <label>Village</label>
                <select name="village" id="village" value={enteredvillage} onChange={(e) => setEnteredVillage(e.target.value)} onClick={villageHandler}>
                    <option defaultValue>Choose the Village</option>       
                    {village.map( (x) => 
                    <option value={x}>{x}</option> )}
                </select> 
                <button type="submit" onClick={submitHandler}>Submit</button>
            </form>
        </section>
    );
};

export default Farmerdetails;