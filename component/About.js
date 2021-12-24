import React, { Component } from 'react'

 class About extends Component {
    render() {
        return (
         <div>
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
                                    organization without changing the website                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default About
