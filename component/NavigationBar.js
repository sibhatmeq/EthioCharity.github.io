import React, { Component } from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'

import Routing from './Routing';
class NavigationBar extends Component {
    render() {
        return (
            <div>
                
                {/* <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a href="Home1.js" className="navbar-brand">Ethio Charity Hub</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                        <Router>
                                <Link to="/" >
                                <a href="#" className="nav-item nav-link active">Home</a>
                                </Link>
                            </Router>

                            <Router>
                                <Link to="/Causes">
                            <a href="#" className="nav-item nav-link">Causes </a>
                                
                                </Link>
                            </Router>
                            
                            <Router>
                                <Link to="/Event" >
                                <a href="#" className="nav-item nav-link">Event</a>
                                </Link>
                            </Router>
                            <Router>
                                <Link to="/Blog" >
                                <a href="#" className="nav-item nav-link">Blog</a> 
                                </Link>
                            </Router>
                            <Router>
                                <Link to="/About" >
                                <a href="#" className="nav-item nav-link">About</a> 
                                </Link>
                            </Router>
                            <Router>
                                <Link to="/Contact" >
                                <a href="#" className="nav-item nav-link">contact</a> 
                                </Link>
                            </Router>
                            
                                 
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu">
                                    <a href="single.js" className="dropdown-item">Detail Page</a>
                                    <a href="service.js" className="dropdown-item">What We Do</a>
                                    <a href="team.js" className="dropdown-item">Meet The Team</a>
                                    <a href="donate.js" className="dropdown-item">Donate Now</a>
                                    <a href="volunteer.js" className="dropdown-item">Become A Volunteer</a>
                                </div>
                            </div>
                            <a href="contact.js" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        )
    }
}

export default NavigationBar
