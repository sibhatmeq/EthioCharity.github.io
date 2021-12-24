import React, { Component } from 'react'
import Footer from '../../Footer'
import AboveHeader from '../../AboveHeader'
import Routing from '../../Routing'
import orgdata from '../organizations1'
import { Link } from 'react-router-dom'
class environment extends Component {
    render() {
        return (
    <div>
        <AboveHeader />
          <Routing />
           <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>CharityOrganization For environment</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="event">
            <div className="container">
                <div className="section-header text-center">
                    <p>Charity Organization Environment</p>
                    <h1>help those organizations</h1>
                </div>
                <div className="row">
                {
                        orgdata.YeAkababiTibeka.map((environment)=>(
                    <div className="col-lg-6">
                        <div className="event-item">
                           <a href="/ArenguadeAshara"> <img src={environment.orgLogo} alt="Image" /></a>
                            <div className="event-content">
                                <div className="event-text">
                                    <h3>{environment.orgName}</h3>
                                    <p>
                                    {environment.orgdisc}
                                  </p>
                                    <a className="btn btn-custom" href="/AreguadeAshara">Visit Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                     ))
                    } 
                     
                </div>
            </div>
        </div>
    
        <Footer />
            </div>
        )
    }
}

export default environment;
