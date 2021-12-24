import React, { Component } from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'
class Routing extends Component {
    render() {
        return (
      <div>
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a href="Home1.js" className="navbar-brand">Ethio Charity Hub</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                                <Link to="/" >
                                <a href="#" className="nav-item nav-link active">Home</a>
                                </Link>
                        
                                <Link to="/Causes">
                            <a href="#" className="nav-item nav-link">Organizations</a>
                                
                                </Link>
                                <Link to="/Event" >
                                <a href="#" className="nav-item nav-link">Event</a>
                                </Link>
                        
                                <Link to="/Blog" >
                                <a href="#" className="nav-item nav-link">News</a> 
                                </Link>
                            
                                <Link to="/About" >
                                <a href="#" className="nav-item nav-link">About</a> 
                                </Link>
                                    
                                 <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu">
                                    <a href="single" className="dropdown-item">Detail Page</a>
                                    <a href="service" className="dropdown-item">Organization</a>
                                    <a href="team" className="dropdown-item">Meet The Team</a>
                                    <a href="donate" className="dropdown-item">Donate Now</a>
                                    <a href="volunteer" className="dropdown-item">Become A Volunteer</a>
                                </div>
                            </div>
                            <a href="contact" className="nav-item nav-link">Contact</a>
                             <Link to="/Signup" >
                                <a href="#" className="nav-item nav-link">LogIn</a> 
                                </Link> 
                         </div>
                    </div>
                </div>
            </div>                    
     </div>
        )
    }
}

export default Routing
