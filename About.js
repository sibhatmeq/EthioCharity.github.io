import React from 'react'
import { Link,BrowserRouter as Router } from 'react-router-dom';
import AboveHeader from './component/AboveHeader';
import Routing from './component/Routing';
import Footer from './component/Footer';
import DonationStatus from './component/DonationStatus';
function About() {
    return (
        <div>
             <AboveHeader/>
             <Routing/>

        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>About Us</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img" data-parallax="scroll" data-image-src="img/about.jpg"></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-header">
                            <p>About Us</p>
                            <h2>EthioCharityHub</h2>
                        </div>
                        <div className="about-tab">
                            <ul className="nav nav-pills nav-justified">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="pill" href="#tab-content-1">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#tab-content-2">Mission</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#tab-content-3">Vision</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div id="tab-content-1" className="container tab-pane active">
                                    Charity is a fundamental norm of Ethiopians which is deeply waved into the culture. 
                                    This act of philanthropy is advocated in every culture, religion, and value that exists in Ethiopia. 
                                    Simply, we can state that it is part of what is being an Ethiopian.
                                    This adorable social value is also witnessed by foreigners as a manner of Ethiopians.

                                    For centuries, charitable giving has been practiced in a traditional way where philanthropists directly 
                                    provide money to those in need of support who usually seat on streets or public places. 
                                    This mode of charity still constitutes the major share of charitable giving. However, nowadays, 
                                    several local charity organizations are emerging in Ethiopia.
                                </div>
                                <div id="tab-content-2" className="container tab-pane fade">
                                   To develop a system that acts as a hub for all local charity organizations. 
                                    system that enables a donor can donate money online though internet.that enables a donor can donate 
                                    materials.that enables a donor can support charity organizations by their profession.
                                    asystem that provides full information of charity organizations.
                                    system that provides a set of charity organizations in different categories.
                                    system that enables doners to donate to more than one charity 
                                    organization without changing the website     

                                </div>
                                <div id="tab-content-3" className="container tab-pane fade">
                                    To develop a system that acts as a hub for all local charity organizations. 
                                    system that enables a donor can donate money online though internet.that enables a donor can donate 
                                    materials.that enables a donor can support charity organizations by their profession.
                                    asystem that provides full information of charity organizations.
                                    system that provides a set of charity organizations in different categories.
                                    system that enables doners to donate to more than one charity 
                                    organization without changing the website 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <DonationStatus/>

        <div className="team">
<div className="container">
    <div className="section-header text-center">
        <p>Meet Our Team</p>
        <h2>Awesome guys behind our charity activities</h2>
    </div>
    <div className="row">
        <div className="col-lg-3 col-md-6">
            <div className="team-item">
                <div className="team-img">
                    <img src="img/team-1.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                    <h2>Yohannes M</h2>
                    <p>Founder & CEO</p>
                    <div className="team-social">
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="team-item">
                <div className="team-img">
                    <img src="img/team-2.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                    <h2>surafel G</h2>
                    <p>Chef Executive</p>
                    <div className="team-social">
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="team-item">
                <div className="team-img">
                    <img src="img/team-3.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                    <h2>Yirbarek B</h2>
                    <p>Chef Advisor</p>
                    <div className="team-social">
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="team-item">
                <div className="team-img">
                    <img src="img/team-4.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                    <h2>Surafel F</h2>
                    <p>Advisor</p>
                    <div className="team-social">
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
          
 <Footer/>
        </div>
    );
}

export default About
