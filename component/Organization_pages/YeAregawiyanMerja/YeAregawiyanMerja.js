import React, { Component } from 'react'
import Footer from '../../Footer'
import AboveHeader from '../../AboveHeader'
import Routing from '../../Routing'
import orgdata from '../organizations1'
class YeAregawiyanMerja extends Component {
    render() {
        return (
    <div>
        <AboveHeader />
          <Routing />
           <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>CharityOrganization For Aregawiyan</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="event">
            <div className="container">
                <div className="section-header text-center">
                    <p>Charity Organization work Aregawian</p>
                    <h1>help those organizations:help Ethiopioa!</h1>
                </div>

                <div className="row">
                    {
                        orgdata.Aregawian.map((organi)=>(
                    <div className="col-lg-6">
                        <div className="event-item">
                           <a href="/GergesonYeAregawiyan"><img src={organi.orgLogo} alt="Image"/></a>
                            <div className="event-content">
                                <div className="event-text">
                                    <h3>{organi.orgName}</h3>
                                    <p>
                                       {organi.orgdisc}
                                    </p>
                                    <a className="btn btn-custom" href="/GergesonYeAregewiyan">Visit Us</a>
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

export default YeAregawiyanMerja
