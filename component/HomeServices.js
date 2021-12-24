import React , {useState , useContext , useEffect} from 'react'
import YeAregawiyanMerja from './Organization_pages/YeAregawiyanMerja/YeAregawiyanMerja'
import { Link } from "react-router-dom";

import {DataContext , DataProvider , createAxios} from '../context_providers/data.js'

 export default function HomeServices() {


    const data = [
        {
            id: 1 ,
            name: "festula" ,
            desc: "Can you imagine a world without hunger?" ,
            img: "../healthimg.jpg"
        } ,
        {
            id: 2 ,
            name: "Hithanat" ,
            desc: "Can you imagine a world without hunger?" ,
            img: "../healthimg.jpg"
        } ,
        {
            id: 3 ,
            name: "Minduban" ,
            desc: "Can you imagine a world without hunger?" ,
            img: "../healthimg.jpg"
        } 


    ] ;


        return (
     <div>
        <div className="service">
            <div className="container">
                <div className="section-header text-center">
                    <p> </p>
                    <h2>የመርጃ ማዕከላት</h2>
                </div>
                <div className="row">

                {data.map( (i) => ( 
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                            <img src={i.img} style={{width:'70px'},{height:'70px'} }alt="Image" />
                                {/* <i className="flaticon-diet"></i> */}
                            </div>
                            <div className="service-text">
                            <Link to ={"/HealthAndFood/" + i.name}><h3>{i.name} </h3></Link>
                                <p>{i.desc}</p>
                            </div>
                        </div>
                    </div>
                      ))}
                    {/* <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                {/* <i className="flaticon-water"></i> 
                                <img src="img/aregawi.JPG" style={{width:'70px'},{height:'70px'} }alt="Image" />
                            </div>
                            <div className="service-text">
                               <a href="/YeAregawiyanMerja"><h3>የአረጋዊያን መርጃ</h3></a>
                                <p>We can all make a difference in the lives of others in need because 
                                  it is the most simple of gestures that make the most significant of differences.
                                </p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                {/* <i className="flaticon-healthcare"></i> 
                                <img src="img/enat.JPG" style={{width:'70px'},{height:'70px'} }alt="Image" />
                            </div>
                            <div className="service-text">
                            <a href="/YeFestulaMerja"><h3>የፌስቱላ ተጎጅዎች መርጃ</h3></a>
                                <p>This place will go on for many, many years until we have eradicated fistula altogether 
                                until every woman in Ethiopia is assured of a safe delivery and a live baby.
                                Dr Catherine Hamlin</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                {/* <i className="flaticon-education"></i> 
                            <img src="img/childimg.JPG" style={{width:'70px'},{height:'70px'} }alt="Image" />
                            </div>
                            <div className="service-text">
                            <a href ="/YehetsanatMerja"><h3>የህጻናት መርጃ</h3></a>
                                <p>
                                    “Children are our most valuable resource.” – Herbert Hoover
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                {/* <i className="flaticon-home"></i> 
                                <img src="img/aemrohemuman.JPG" style={{width:'70px'},{height:'70px'} }alt="Image" />
                            </div>
                            <div className="service-text">
                            <a href="/YeAemeroHumuman"><h3>የአዕምሮ ህሙማን መርጃ</h3></a>
                                <p>Transforming humans for happy and healthy life
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                {/* <i className="flaticon-social-care"></i> *
                                <img src="img/environmente.JPG" style={{width:'70px'},{height:'70px'} }alt="Image" />
                            </div>
                            <div className="service-text">
                            <a href="/Environmental"><h3>አካባቢ እንክብካቤ</h3></a>
                                <p>Run towards saving the environment before we have to 
                                    run towards survival battle</p>
                            </div>
                        </div>
                    </div> */}
                </div>
             </div>
         </div>

     </div>
        )
    
}

