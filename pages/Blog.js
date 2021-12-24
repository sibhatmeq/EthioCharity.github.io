import React , {useContext ,useState , useEffect} from 'react'
import StripeCheckout from "react-stripe-checkout" ;
import { Link,BrowserRouter as Router } from 'react-router-dom'
import Routing from '../component/Routing'
import Footer from '../component/Footer'
import orgdata from '../component/Organization_pages/organizations1' 
import AboveHeader from '../component/AboveHeader'
import {DataContext , DataProvider , createAxios} from '../context_providers/data.js'
import axios from 'axios';
// const createAxios = axios.create({
//     baseURL: `http://localhost:4000/api/v1` 
// })

function Blog() {

    const [Events , setEvents ] = useContext(DataContext) ;

    useEffect(() => {
        const fetchData = async() => {
            try{
                console.log('trying to connect!!!!!!!!!!!!!1')
                const Event_response = await createAxios.get(`/post`) ;
                console.log(Event_response) ;
                 setEvents(Event_response.data.data.post) ;
                
                
            } catch(err) {
                // console.log('error has occured ' + err) ;
                console.log(err) ;
               
            }
            
        } 
        fetchData() ;
    }, [])


    const [product , setProduct] = useState({
        name: "React from fb" ,
        price: 10  ,
        productBy: "facebook" ,
      }) ;

      const changeHandler1= e => {
         
        setProduct({
            price: 10 
        })
       }

       const makePayment = token => {
        const body = {
          token ,
          product
        } 
     
        const headers = {
          "Content-Type": "application/json"
        } ;
        return fetch(`http://localhost:8282/payment`, {
          method: "POST" ,
          headers ,
          body: JSON.stringify(body)
        }).then(response => {
          console.log("RESPONSE" , response)
          const {status} = response ;
          console.log("Status" , status) ;
        }).catch(error => console.log(error)) ;
      }

    return (
        <div>
            <AboveHeader/>
            <Routing />
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>News Feeds</h2>
                    </div>
                
                </div>
            </div>
        </div>
        <div className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>our News feeds</p>
                    <h2>Latest news & articles directly from our EthioCharityHub</h2>
                </div>
                <div className="row">
                    {  
                           Events.map((postss)=>(
                            <div className="col-lg-4">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={`http://localhost:4000/${postss.imagePath}`} alt="Image" />
                                </div>
                                <div className="blog-text">
                                    <h3><a href="#">{postss.description}</a></h3>
                                    <p>
                                    {postss.postdisc}
                                   </p>
                                </div>
                                <div className="blog-meta">


                                <StripeCheckout 
                                    stripeKey="pk_test_51JTMwbAUz0pyjB9IVNwmIIeRtLEaPFpIsBbJXeGZLkxqNG0vP20081ocjygjh3CFVgdfZrVPSJbXotkxwwDZrhkq00KrCk5rrw"
                                    token={makePayment}
                                    name="Make your Donation"
                                    amount={product.price *100} > 
                                    <button className="btn btn-custom">Donate Now ${product.price}</button>
                                    </StripeCheckout>
                                    {/* <p><i className="fa fa-user"></i><a href="/Donate">Donate now</a></p> */}


                                    <p><i className="fa fa-share"></i><a href="/www.facebook.com">Share</a></p>
                                </div>
                            </div>
                        </div>
                           ))             
                    }
                </div>
                {/* <div className="row">
                    <div className="col-12">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul> 
                    </div>
                </div> */}
            </div>
        </div>
        
        <Footer/>    
        </div>
    )
}

export default Blog
