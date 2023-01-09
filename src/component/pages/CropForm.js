import './CropForm.css'
import { useState } from 'react'
import axios from 'axios'




const CropForm =()=> {


const[farmerId, setFarmerId] = useState('AIS0004')
const[area, setArea] = useState()
const[type, setType] = useState('')
const[name, setName] = useState('')
const[variety, setVariety] = useState('')
const[brand, setBrand] = useState('')
const[cropedAt, setCropedAt] = useState('')
const[organic, setOrganic] = useState(false)
const[seedingType, setSeedingType] = useState('')
const[harvestPeriod, setHarvestPeriod] = useState('')


const [input, setInput] = useState()
const[error, setError] = useState()


const data = [{
  farmerId: farmerId,
area: +area,
type: type,
name:name,
variety:variety,  
brand: brand,
croppedAt: cropedAt,
organic: organic,
seedingType: seedingType,
harvestPeriod: harvestPeriod,
    

}]



console.log('data', data)
const submitHandler =(event)=> {
  event.preventDefault()

  console.log('data', data)

    axios.post("https://091f-49-204-138-20.in.ngrok.io/crop/create", {cropDetails:data}).then((response) => {

      console.log(response);
    }).catch((error) => {
      console.log(error);
    })

 }


return (
    <div className='div'>
      <h1>Crop Details</h1>
      <html lang='en'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0 '/>

        <form className='crop-form'>
          
      <label>Type of cropping: </label>
      <select value={type} name='type'  onChange={(event)=> setType(event.target.value)}>
      <option value="">Select land</option>
<option value="DryLand">Dryland</option>
<option value="Wetland">Wetland</option>
</select>


      <label>Crop Name
        <input type="text"  value={name} name='name'  onChange={(event)=> setName(event.target.value)}/>
      </label>
      <label>Crop type
        <input type="text" value={variety} name='variety'  onChange={(event)=> setVariety(event.target.value)}/>
      </label>
      <label>Brand
        <input type="text"  value={brand} name='brand' onChange={(event)=> setBrand(event.target.value)}/>
      </label>
      <label>Area
        <input type="number" value={area} name='area' onChange={(event)=> setArea(event.target.value)}/>
      </label>
      <label>Harvesting period:
        <input type="text" value={harvestPeriod} name = 'harvestPeriod' onChange={(event)=> setHarvestPeriod(event.target.value)}/>
      </label>
      
      <label for="date">Cropped at (Starting date) :</label>
      <input type= "date" id="date" name="cropedAt" value={cropedAt}  onChange={(event)=> setCropedAt(event.target.value)} />

      <label>Planted / Seeded
        <select value={seedingType}  name='seedingType' onChange={(event)=> setSeedingType(event.target.value)}>
        <option value=""></option>
<option value="Planted">Planted</option>

<option value="Seeded">Seeded</option>
</select>
     
</label>
 

    </form>
 
    </html>
    <div className='check' >
<label for='checkbox'>Organic:</label> 
<input type='checkbox' value={organic} name = 'organic' onChange={()=> setOrganic(!organic)}  />

</div>

<button onClick={submitHandler}>SUBMIT</button>

    </div>
)
}

export default CropForm