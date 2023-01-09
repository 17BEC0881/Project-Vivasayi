import './View_Employee.css';
import axios from 'axios';
import { useEffect } from 'react';

const View = () => {
 
    useEffect(() =>{
        const formtoken ={
            headers:{
                  "Authorization" : "Bearer "+ localStorage.getItem('token'),
               },
         };
         axios.get(`https://091f-49-204-138-20.in.ngrok.io/employee/all`,formtoken)
         .then((response)=>{
           console.log(response.data)
         })
    },[])


    return (
     <div className='view'>
      <h1>welcome</h1>
      </div>
    )
}

export default View;