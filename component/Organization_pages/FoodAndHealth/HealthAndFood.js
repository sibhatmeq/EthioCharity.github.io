import React , {useState , useContext , useEffect} from 'react'
import Routing from '../../Routing'
import AboveHeader from '../../AboveHeader'
import Footer from '../../Footer'
import { useParams } from 'react-router'
import MaterailDonate from '../../MaterialDonate/MaterailDonate'
import DonateBY from '../../../pages/DonationBy'
import {DataContext , DataProvider , createAxios} from '../../../context_providers/data.js'
import { Link } from 'react-router-dom'


export default function HealthAndFood() {
    const {id} = useParams() ;

    useEffect(() => {
        const fetchData = async() => {
            try{
                console.log('trying to connect!!!!!!!!!!!!!1')
                const Event_response = await createAxios.get(`/orgs?catagory=${id}`) ;

                 setEvents(Event_response.data.data.org) ;
                console.log(Event_response) ;
                
            } catch(err) {
                // console.log('error has occured ' + err) ;
                console.log(err.response.data) ;
                console.log(err.response.status) ;
                console.log(err.response.headers) ;
            }
            
        } 
        fetchData() ;
    }, [])
    const [Events , setEvents ] = useContext(DataContext) ;
        
        return (
            <div>
                <AboveHeader/>
            <Routing/>
        
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>HealthAndFood merja Organization {id}</h2>
                        <h2 style={{textAlign:'center'}}><DonateBY/></h2>
                    </div>
                </div>
            </div>
        </div>
        {Events.map( (i) => ( 
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                            <img src={`http://localhost:4000/${i.imagePath}`} style={{width:'70px'},{height:'70px'} }alt="Image" />
                                {/* <i className="flaticon-diet"></i> */}
                            </div>
                            <div className="service-text">
                            <Link to ={"/detail/" + i.id}><h3>{i.name} </h3></Link>
                                <p>{i.description}</p>
                            </div>
                        </div>
                    </div>
                      ))}


<Footer/> 
            </div>
        )
    
}

