import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

import axios from 'axios'
import { useParams } from 'react-router'
function Appointment() {
    const url="http://localhost:4000/api/v1/apointment" ;
    const [date , setDate] = useState('') ;
    const [message , setMessage] = useState('') ;
    const {id} = useParams() ;

    function handleSubmit(e){
        e.preventDefault() ;
        setDate(date) ;
        console.log(date) ;
    //   e.preventDefault();
      axios.post(url,{
        description: message ,
        deliveryDate: date ,
        org: id ,
        user: '61346facd66ad24efef81a3e'
      })
      .then(res=>{
          console.log(res.data)
      })
      
    } 
 return (
        <div>
            <form>
        <div className="col-sm-6 offset-sm-3 ">
         <h1 style={{textAlign:'center'}}>Appointment Form</h1>
           
         <input type="datetime-local" value={date} onChange={(e)=>setDate(e.target.value)} className="form-control" placeholder="Email"  autoComplete="on" required/>
         <br/>
         <label>For what purpose you visit us?</label>
         <div class="form-outline">
            <textarea class="form-control" id="textAreaExample1" rows="4"  value={message} onChange={(e)=>setMessage(e.target.value)}></textarea >
            <label class="form-label" for="textAreaExample"></label>
            </div>
          <button  onClick={handleSubmit}  className="btn btn-primary">Submit</button>
        </div>
        </form> 
        </div>
    )
}

export default Appointment
