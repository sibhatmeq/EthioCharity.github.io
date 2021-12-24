import React from 'react'
import AboveHeader from '../component/AboveHeader'
import Footer from '../component/Footer'
import HomeServices from '../component/HomeServices'
import Routing from '../component/Routing'
function Service() {
    return (
        <div>

        <AboveHeader/>
        <Routing/>
            
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Service</h2>
                    </div>
                    {/* <div className="col-12">
                        <a href="">Home</a>
                        <a href="">Service</a>
                    </div> */}
                </div>
            </div>
        </div> 
        
       <HomeServices/>

       <Footer />
        
    
        </div>
    )
}

export default Service
