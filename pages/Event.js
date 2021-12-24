import React from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom'
import AboveHeader from '../component/AboveHeader'
import Footer from '../component/Footer'
import Routing from '../component/Routing'
import orgdata from '../component/Organization_pages/organizations1'
 class Event extends React.Component{
    state = {
        date: ""
      };
    
      componentDidMount() {
        this.getDate();
      }
    
      getDate = () => {
        var date = new Date().toDateString();
        this.setState({ date });
      };
     
     render(){
         return(
             <div>
                 <AboveHeader />
          <Routing />
           <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>ልዩ ዝግጅቶች</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="event">
            <div className="container">
                <div className="section-header text-center">
                
                <h2>ፕሮግራሞቻችን መጥተው ይታደሙ</h2>
                </div>
                <div className="row">

                    {
                         orgdata.event.map((eventt)=>(
                            <div className="col-lg-6">
                            <div className="event-item">
                                <img src={eventt.eventLogo} alt="Image" />
                                <div className="event-content">
                                    <div className="event-meta">
                                        <p><i className="fa fa-calendar-alt"></i>{this.state.date}</p>
                                        <p><i className="far fa-clock"></i>8:00 - 10:00</p>
                                        <p><i className="fa fa-map-marker-alt"></i>addisAbeba,Ethiopia</p>
                                    </div>
                                    <div className="event-text">
                                        <h3>{eventt.eventname}</h3>
                                        <p>
                                        {eventt.eventdisc}
                                    </p>
                                        <a className="btn btn-custom" href="/Register">Join Now</a>
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

export default Event
