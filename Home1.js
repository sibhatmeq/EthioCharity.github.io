import React from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import AboveHeader from './component/AboveHeader'
import MovingBackGround from './component/MovingBackGround'
import Footer from './component/Footer'
import NewsFeeds from './component/NewsFeeds'
import ContactQuery from './component/ContactQuery'
import Testimonial from './component/Testimonial';
import HomeEvent from './component/HomeEvent'
import About from './component/About'
import HomeServices from './component/HomeServices'
import Teams from './component/Teams';
import BeVolunteer from './component/BeVolunteer'
import HomeDonate from './component/HomeDonate';
import DonationStatus from './component/DonationStatus'
import NavigationBar from './component/NavigationBar'
import Videos from './component/Videos'
import Routing from './component/Routing'



function Home1() {
    return (
        <div>
            <Routing/>
            <AboveHeader/>
            
            {/* <NavigationBar/> */}
            <MovingBackGround/> 
             <Videos/> 
             <About />
            <HomeServices/>
            <DonationStatus/>            
            <HomeDonate/>
            <HomeEvent /> 
            <NewsFeeds/>  
            <BeVolunteer/>
            <Teams />            
             <Footer />

    </div>
    )
}

export default Home1
