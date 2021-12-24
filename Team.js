import React from 'react'
import AboveHeader from './component/AboveHeader'
import Routing from './component/Routing'
import Footer from './component/Footer'
import Teams from './component/Teams'
function Team() {
    return (

     <div>
        <AboveHeader/>
        <Routing />
        
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Team Member</h2>
                    </div>
                    {/* <div className="col-12">
                        <a href="">Home</a>
                        <a href="">Team</a>
                    </div> */}
                </div>
            </div>
        </div>
        <Teams/>
        {/* <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>Meet Our Team</p>
                    <h2>People behind EthioCharityHub</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-1.jpg" alt="Team Image" />
                            </div>
                            <div className="team-text">
                                <h2>Surafel G</h2>
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
                                <h2>Surafel F</h2>
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
                                <h2>Yohannes M</h2>
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
                                <h2>Sibhat M</h2>
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
        </div> */}
       

<Footer/>
</div>
    )
}

export default Team
