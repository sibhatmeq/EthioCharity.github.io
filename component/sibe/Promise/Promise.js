import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router'

function Promise() {
    const url="http://localhost:4000/api/v1/promise" ;
    const [date , setDate] = useState('') ;
    const [comment , setComment] = useState('') ;
    const {id} = useParams() ;

    function handleSubmit(e){
        e.preventDefault() ;
        setDate(date) ;
        console.log(date) ;
    //   e.preventDefault();
      axios.post(url,{
        description: comment ,
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
              <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="col-sm-6 offset-sm-3 ">
         <h1 style={{textAlign:'center'}}>Make Promise Donation</h1>
         <br/> <span>when you want to donate?</span>  

         <input type="date"
           value={date}
           onChange={(e) => setDate(e.target.value)}
           className="form-control" placeholder="Enter the date you want to donate"
             autoComplete="on" required/>
         <br/>

         <label>Enter what type of donation you want to donate in detail?</label>
        <div class="form-outline">
            <textarea class="form-control" id="textAreaExample1" 
             rows="4"  
             onChange={(e) => setComment(e.target.value)}
             value={comment}></textarea >
            <label class="form-label" for="textAreaExample"></label>
            </div>
         <button className="btn btn-success">Submit</button>
        </div>
        </form> 
        </div>
    )
}

export default Promise ;
