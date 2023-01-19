import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import classes from './CropEditTable.module.css'
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"

import { farmeractions } from "../store/reducer"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { cropActions } from "../store/cropReducer"

const CropEditTable =()=> {
    // const [crop, setCrop] = useState(CropEditData)
    // const  {farmer}  = useSelector ((state)=> state.farmer)
    // console.log('farmer', farmer)
    const  {cropData}  = useSelector ((state)=> state.crop)
    console.log('cropData', cropData)
    const  {cropEditData}  = useSelector ((state)=> state.crop)
     console.log('cropEditData', cropEditData)

    const dispatch= useDispatch()


    useEffect(() => {
      // const submitHandler =(event)=> {
      //     event.preventDefault()
 
      axios
        .get('https://66d4-49-204-138-29.in.ngrok.io/farmer/all')
        .then((response) => {
          console.log(response);
          dispatch(cropActions.create_crop(response.data))
//         response.data.map((item)=> {
// console.log('res', item.cropDetails)
// dispatch(cropActions.create_crop(item))
//         })
     
       //dispatch(cropActions.create_crop(response.data))
    
        })
        
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
        });


   }, []);


    const Navigate =useNavigate()
  


    // const CropEditData = 
    //     [    
    //         {
    //             "farmerDetails": {
    //                 "residentialType": "Local",
    //                 "whatsappNumber": 7654897654,
    //                 "farmerId": "JEY0001",
    //                 "nickName": "Hanish",
    //                 "farmerName": "Hanish Kumar",
    //                 "age": 11,
    //                 "gender": "Male",
    //                 "fatherName": "S",
    //                 "phoneNumber": 9212660591,
    //                 "state": "Tamilnadu",
    //                 "district": "Ramanathapuram",
    //                 "union": "Mandapam",
    //                 "panchayat": "pudhumadam",
    //                 "village": "Ammapattinam",
    //                 "organic": false,
    //                 "singleSeed": false,
    //                 "altCrop": false,
    //                 "seedVariety": false,
    //                 "leaseOwnLand": true,
    //                 "farmRentedLand": false
    //             },
    //             "livestockDetails": [
    //                 {
    //                     "type": "fyu",
    //                     "breed": ".kjlk",
    //                     "name": "kj",
    //                     "count": 87,
    //                     "season": "hhym"
    //                 },
    //                 {
    //                     "type": "jgftf",
    //                     "breed": "hgkj",
    //                     "name": "kyugliu",
    //                     "count": 76,
    //                     "season": "bkoil"
    //                 }
    //             ],
    //             "labourDetails": [
    //                 {
    //                     "landPlowing": false,
    //                     "weedRemoving": false,
    //                     "pesticideSpraying": false,
    //                     "handHarvesting": false,
    //                     "cropSpanking": false,
    //                     "pumpsetDuty": false,
    //                     "landCleaning": false,
    //                     "treeClimbing": false,
    //                     "paddySteaming": false,
    //                     "landPlowingWithTractor": false,
    //                     "fertilization": true
    //                 }
    //             ],
    //             "machineDetails": [],
    //             "landDetails": [
    //                 {
    //                     "supervisorId": "AIS0004",
    //                     "ownerId": "JEY0001",
    //                     "category": "leasedLand",
    //                     "addons": "None",
    //                     "landId": "JEY0001001",
    //                     "area": 102
    //                 },
    //                 {
    //                     "supervisorId": "MAH0006",
    //                     "ownerId": "JEY0001",
    //                     "category": "leasedLand",
    //                     "addons": "None",
    //                     "landId": "JEY0001002",
    //                     "area": 102
    //                 },
    //                 {
    //                     "supervisorId": "",
    //                     "ownerId": "JEY0001",
    //                     "category": "availableForLease",
    //                     "addons": "None",
    //                     "landId": "JEY0001006",
    //                     "area": 102
    //                 },
    //                 {
    //                     "supervisorId": "",
    //                     "ownerId": "JEY0001",
    //                     "category": "availableForLease",
    //                     "addons": "None",
    //                     "landId": "JEY0001007",
    //                     "area": 102
    //                 },
    //                 {
    //                     "supervisorId": "",
    //                     "ownerId": "JEY0001",
    //                     "category": "availableForLease",
    //                     "addons": "None",
    //                     "landId": "JEY0001008",
    //                     "area": 102
    //                 },
    //                 {
    //                     "supervisorId": "",
    //                     "ownerId": "JEY0001",
    //                     "category": "availableForLease",
    //                     "addons": "None",
    //                     "landId": "JEY0001009",
    //                     "area": 102
    //                 },
    //                 {
    //                     "supervisorId": "",
    //                     "ownerId": "JEY0001",
    //                     "category": "availableForLease",
    //                     "addons": "None",
    //                     "landId": "JEY0001010",
    //                     "area": 102
    //                 },
    //                 {
    //                     "supervisorId": "",
    //                     "ownerId": "JEY0001",
    //                     "category": "availableForLease",
    //                     "addons": "None",
    //                     "landId": "JEY0001011",
    //                     "area": 102
    //                 },
    //                 {
    //                     "supervisorId": "",
    //                     "ownerId": "JEY0001",
    //                     "category": "availableForLease",
    //                     "addons": "None",
    //                     "landId": "JEY0001012",
    //                     "area": 102
    //                 },
    //                 {
    //                     "supervisorId": "",
    //                     "ownerId": "JEY0001",
    //                     "category": "availableForLease",
    //                     "addons": "None",
    //                     "landId": "JEY0001013",
    //                     "area": 102
    //                 }
    //             ],
    //             "cropDetails": [],
    //             "gardenDetails": [
    //                 {
    //                     "type": "DWKJCX",
    //                     "name": "DOIU",
    //                     "variety": "DWOI",
    //                     "brand": "DRDOI333",
    //                     "area": 23,
    //                     "count": 3,
    //                     "organic": true,
    //                     "age": 434,
    //                     "sellingPeriod": "23D"
    //                 }
    //             ],
    //             "buyDetails": [],
    //             "sellDetails": []
    //         },
    //         {
    //             "farmerDetails": {
    //                 "residentialType": "Local",
    //                 "whatsappNumber": 7092660353,
    //                 "farmerId": "JEY0004",
    //                 "nickName": "Hanish",
    //                 "farmerName": "Jeyendran",
    //                 "age": 11,
    //                 "gender": "Male",
    //                 "fatherName": "Jeyendran",
    //                 "phoneNumber": 7092660353,
    //                 "state": "Tamilnadu",
    //                 "district": "Ramanathapuram",
    //                 "union": "Mandapam",
    //                 "panchayat": "pudhumadam",
    //                 "village": "Ammapattinam",
    //                 "organic": false,
    //                 "singleSeed": false,
    //                 "altCrop": false,
    //                 "seedVariety": false,
    //                 "leaseOwnLand": false,
    //                 "farmRentedLand": false
    //             },
    //             "livestockDetails": [],
    //             "labourDetails": [
    //                 {
    //                     "landPlowing": false,
    //                     "weedRemoving": false,
    //                     "pesticideSpraying": false,
    //                     "handHarvesting": false,
    //                     "cropSpanking": false,
    //                     "pumpsetDuty": false,
    //                     "landCleaning": false,
    //                     "treeClimbing": false,
    //                     "paddySteaming": false,
    //                     "landPlowingWithTractor": false,
    //                     "fertilization": false
    //                 }
    //             ],
    //             "machineDetails": [],
    //             "landDetails": [],
    //             "cropDetails": [],
    //             "gardenDetails": [],
    //             "buyDetails": [],
    //             "sellDetails": []
    //         },
    //         {
    //             "farmerDetails": {
    //                 "whatsappNumber": 9629772452,
    //                 "farmerId": "SWE0003",
    //                 "nickName": "swe",
    //                 "farmerName": "Swetha",
    //                 "age": 22,
    //                 "gender": "female",
    //                 "fatherName": "karunanithi",
    //                 "phoneNumber": 9629772452,
    //                 "state": "Tamilnadu",
    //                 "district": "Dindigul",
    //                 "union": "Oddanchatram",
    //                 "panchayat": "Tamaraikulam",
    //                 "village": "Kumbaram",
    //                 "organic": false,
    //                 "singleSeed": true,
    //                 "altCrop": false,
    //                 "seedVariety": false,
    //                 "leaseOwnLand": true,
    //                 "farmRentedLand": false
    //             },
    //             "livestockDetails": [],
    //             "labourDetails": [
    //                 {
    //                     "landPlowing": false,
    //                     "weedRemoving": false,
    //                     "pesticideSpraying": false,
    //                     "handHarvesting": false,
    //                     "cropSpanking": false,
    //                     "pumpsetDuty": false,
    //                     "landCleaning": false,
    //                     "treeClimbing": false,
    //                     "paddySteaming": false,
    //                     "landPlowingWithTractor": false,
    //                     "fertilization": false
    //                 }
    //             ],
    //             "machineDetails": [
    //                 {
    //                     "rentalBasis": "Hour",
    //                     "rent": 900,
    //                     "count": 1,
    //                     "brand": "Mahindra",
    //                     "attachments": "Aerators",
    //                     "subType": "Push mowers",
    //                     "type": "Mowers"
    //                 }
    //             ],
    //             "landDetails": [],
    //             "cropDetails": [
    //                 {
    //                     "type": "Wetland",
    //                     "name": "Rice",
    //                     "variety": "Brown Rice",
    //                     "brand": "BRDL Limited",
    //                     "area": 3,
    //                     "croppedAt": "2023-01-19",
    //                     "organic": true,
    //                     "seedingType": "Seeded",
    //                     "harvestPeriod": "6 Months"
    //                 },
    //                 {
    //                     "type": "aaaa",
    //                     "name": "bbbb",
    //                     "variety": "cccc",
    //                     "brand": "dddd",
    //                     "area": 102,
    //                     "croppedAt": "eeee",
    //                     "organic": false,
    //                     "seedingType": "eeee",
    //                     "harvestPeriod": "9 Months"
    //                 }
    //             ],
    //             "gardenDetails": [],
    //             "buyDetails": [],
    //             "sellDetails": []
    //         },
    //         {
    //             "farmerDetails": {
    //                 "residentialType": "Local",
    //                 "whatsappNumber": 7092660353,
    //                 "farmerId": "TES0002",
    //                 "nickName": "test2",
    //                 "farmerName": "test3",
    //                 "age": 11,
    //                 "gender": "Male",
    //                 "fatherName": "test3",
    //                 "phoneNumber": 7092669353,
    //                 "state": "Tamilnadu",
    //                 "district": "Ramanathapuram",
    //                 "union": "Mandapam",
    //                 "panchayat": "pudhumadam",
    //                 "village": "Ammapattinam",
    //                 "organic": false,
    //                 "singleSeed": false,
    //                 "altCrop": false,
    //                 "seedVariety": false,
    //                 "leaseOwnLand": false,
    //                 "farmRentedLand": false
    //             },
    //             "livestockDetails": [],
    //             "labourDetails": [
    //                 {
    //                     "landPlowing": false,
    //                     "weedRemoving": false,
    //                     "pesticideSpraying": false,
    //                     "handHarvesting": false,
    //                     "cropSpanking": false,
    //                     "pumpsetDuty": false,
    //                     "landCleaning": false,
    //                     "treeClimbing": false,
    //                     "paddySteaming": false,
    //                     "landPlowingWithTractor": false,
    //                     "fertilization": false
    //                 }
    //             ],
    //             "machineDetails": [],
    //             "landDetails": [],
    //             "cropDetails": [],
    //             "gardenDetails": [],
    //             "buyDetails": [],
    //             "sellDetails": []
    //         }
    //     ]

     
    // const maping =     CropEditData.map((item)=> {
    //     console.log(item.farmerDetails.farmerId);
        
    // })



 


const editHandler =(farmer,input)=> {
 console.log('editinput',  input.croppedAt)
    
const editData = {
  farmerId: farmer,
area: input.area,
type: input.type,
name:input.name,
variety:input.variety,  
brand: input.brand,
croppedAt: input.croppedAt,
organic: input.organic,
seedingType: input.seedingType,
harvestPeriod: input.harvestPeriod,
    

}
 console.log('editData', editData)

dispatch(cropActions.crop_edit_data(editData))


Navigate('/cropeditform')
}

// const deleteHandler =(index)=> {

//   // const newArr   = [...cropData]
//   // console.log('del', newArr)
//   // const index = cropData.findIndex((contact) => contact.id === input);

//   // newArr.splice(index,1)
//  const del = cropDetail.filter((x,i,arr)=> 

//    i !== index)
//  //console.log('del', del)

//  dispatch(farmeractions.delete_data([...del]))
//}

    return (
  <div className={classes.crop}>
  <h1>View Crop Table</h1>

<table>
    <tr>
        <th>Farmer Id</th>
    <th>Type</th>
    <th>Name</th>
    <th>Variety</th>
    <th>Brand</th>
    <th>Area</th>
    <th>Cropped At</th>
    <th>Seeding Type</th>
    <th>Organic</th>
    <th>harvest Period</th>
    <th>Action</th>

    </tr>


 {cropData.map((item)=> {
  //console.log('farmerid', item.farmerDetails.farmerId)
const farmer = item.farmerDetails.farmerId;
//console.log('famee', farmer)
  return (
    item.cropDetails.map((input)=> {
      // console.log('input', input)
     
      return (
        <tr key={input}>
        <td>{farmer}</td>
           <td>{input.type}</td>
             <td>{input.name}</td>
             <td>{input.variety}</td>
              <td>{input.brand}</td>
             <td>{input.area}</td>
             <td>{input.croppedAt}</td>
              <td>{input.seedingType}</td>
              <td>{input.organic.toString()}</td>
            <td>{input.harvestPeriod}</td>

            <td><button onClick={()=> {editHandler(farmer,input)}}>Edit</button></td>
              
        </tr>
     
      )
    })
  )
})} 

{/* 
  {cropData.map((item)=> {
  
    return (
        item.map((input,index)=> {
       
           return (
            <tr key={index}>
     
                <td>{input.type}</td>
              <td>{input.name}</td>
              <td>{input.variety}</td>
              <td>{input.brand}</td>
              <td>{input.area}</td>
              <td>{input.croppedAt}</td>
              <td>{input.seedingType}</td>
              <td>{input.organic.toString()}</td>
              <td>{input.harvestPeriod}</td>

              <td><button onClick={()=> {editHandler(input)}}>Edit</button>
              <button onClick={()=> {deleteHandler(index)}}>Delete</button></td>
             
            </tr>
           )
        })
    )
})}    */}

</table>
        </div>
    )

}

export default CropEditTable