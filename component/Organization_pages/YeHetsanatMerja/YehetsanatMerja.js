import React, { Component } from 'react'
import Footer from '../../Footer'
import AboveHeader from '../../AboveHeader'
import Routing from '../../Routing'
import orgdata from '../organizations1'

class YehetsanatMerja extends Component {
    render() {
        return (
    <div>
        <AboveHeader />
          <Routing />
           <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>CharityOrganization For childerens</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="event">
            <div className="container">
                <div className="section-header text-center">
                    <p>Charity Organization work on Hetsanat</p>
                    <h1>save child save world</h1>
                </div>
                <div className="row">
                   
                   {
                       orgdata.yehisanat.map((ogannn)=>(
                        <div className="col-lg-6">
                        <div className="event-item">
                           <a href="/MudayHetsanat"> <img src={ogannn.orgLogo} alt="Image" /></a>
                            <div className="event-content">
                                <div className="event-text">
                                    <h3>{ogannn.orgName}</h3>
                                    <p>
                                      {ogannn.orgdisc}
                                    </p>
                                   <a className="btn btn-custom" href="/MudayHetsanat">Visit Us</a>
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

export default YehetsanatMerja
