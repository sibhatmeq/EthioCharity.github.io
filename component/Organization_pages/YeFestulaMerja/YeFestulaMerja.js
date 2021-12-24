import React, { Component } from 'react'
import Footer from '../../Footer'
import AboveHeader from '../../AboveHeader'
import Routing from '../../Routing'
import orgdata from '../organizations1'
import { Link } from 'react-router-dom'
class YeFestulaMerja extends Component {
    render() {
        return (
    <div>
        <AboveHeader />
          <Routing />
           <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>CharityOrganization works on Fistula</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="event">
            <div className="container">
                <div className="section-header text-center">
                    <p>Charity Organization work on victims of fistula </p>
                    <h1>help those organizations:</h1>
                </div>
                <div className="row">
                   {
                     orgdata.yefestula.map((festuala)=>(
                        <div className="col-lg-6">
                        <div className="event-item">
                           <img src={festuala.orgLogo} alt="Image" />
                            <div className="event-content">
                                <div className="event-text">
                                <h3>{festuala.orgName}</h3>
                                    <p>
                                       {festuala.orgdisc}
                                    </p>
                                    <a className="btn btn-custom" href="/GergesonYeFestula">Visit Us</a>
                                    
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

export default YeFestulaMerja
