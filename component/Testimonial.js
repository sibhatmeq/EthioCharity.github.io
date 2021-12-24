import React, { Component } from 'react'

class Testimonial extends Component {
    render() {
        return (
        <div>
            <div className="testimonial">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Testimonial</p>
                        <h2>What people are talking about our charity activities</h2>
                    </div>
                    <div className="owl-carousel testimonials-carousel">
                        <div className="testimonial-item">
                            <div className="testimonial-profile">
                                <img src="img/testimonial-1.jpg" alt="Image" />
                                 <div className="testimonial-name">
                                    <h3>Person Name</h3>
                                    <p>Profession</p>
                                  </div>
                                </div>
                            <div className="testimonial-text">
                                <p>
                                Charity is a fundamental norm of Ethiopians which is deeply waved into the culture.
                                This act of philanthropy is advocated in every culture, religion, and value that exists in Ethiopia.
                                </p>
                            </div>
                          </div>
                        <div className="testimonial-item">
                            <div className="testimonial-profile">
                                <img src="img/testimonial-2.jpg" alt="Image" />
                                <div className="testimonial-name">
                                    <h3>Person Name</h3>
                                    <p>Profession</p>
                                </div>
                               </div>
                            <div className="testimonial-text">
                                <p>
                                Charity is a fundamental norm of Ethiopians which is deeply waved into the culture.
                                This act of philanthropy is advocated in every culture, religion, and value that exists in Ethiopia.                                </p>
                            </div>
                          </div>
                        <div className="testimonial-item">
                            <div className="testimonial-profile">
                                <img src="img/testimonial-3.jpg" alt="Image" />
                                   <div className="testimonial-name">
                                    <h3>Person Name</h3>
                                    <p>Profession</p>
                                   </div>
                              </div>
                            <div className="testimonial-text">
                                <p>
                                Charity is a fundamental norm of Ethiopians which is deeply waved into the culture.
                                This act of philanthropy is advocated in every culture, religion, and value that exists in Ethiopia.                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-profile">
                                <img src="img/testimonial-4.jpg" alt="Image" />
                                  <div className="testimonial-name">
                                    <h3>Person Name</h3>
                                    <p>Profession</p>
                                </div>
                              </div>
                            <div className="testimonial-text">
                                <p>
                                Charity is a fundamental norm of Ethiopians which is deeply waved into the culture.
                                This act of philanthropy is advocated in every culture, religion, and value that exists in Ethiopia.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Testimonial
