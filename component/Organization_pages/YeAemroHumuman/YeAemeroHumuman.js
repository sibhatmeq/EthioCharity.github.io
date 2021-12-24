import React, { Component } from 'react'
import Footer from '../../Footer'
import AboveHeader from '../../AboveHeader'
import Routing from '../../Routing'
import orgdata from '../organizations1'
import { Link } from 'react-router-dom'
class YeAemeroHumuman extends Component {
    render() {
        return (
    <div>
        <AboveHeader />
          <Routing />
           <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>CharityOrganization For AemroHemuman</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="event">
            <div className="container">
                <div className="section-header text-center">
                    <p>Charity Organization work on aemrohumuman</p>
                    <h1>help those organizations</h1>
                </div>
                <div className="row">
                {
                        orgdata.yeAemroHemuman.map((aemrohumuman)=>(
                    <div className="col-lg-6">
                        <div className="event-item">
                           <a href="/AemeroHumuman"> <img src={aemrohumuman.orgLogo} alt="Image" /></a>
                            <div className="event-content">
                                <div className="event-text">
                                    <h3>{aemrohumuman.orgName}</h3>
                                    <p>
                                    {aemrohumuman.orgdisc}
                                  </p>
                                    <a className="btn btn-custom" href="/AemroHemuman">Visit Us</a>
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

export default YeAemeroHumuman;
