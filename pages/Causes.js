import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import AboveHeader from '../component/AboveHeader'
import Footer from '../component/Footer'
import HomeServices from '../component/HomeServices'
import Routing from '../component/Routing'


function Causes() {
    return (
        <div>
           <AboveHeader />
           <Routing/>
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Charity Organization Catagories</h2>
                    </div>
                </div>
            </div>
        </div>

        <HomeServices/>   
        <Footer />
        </div>
    )
}

export default Causes;
