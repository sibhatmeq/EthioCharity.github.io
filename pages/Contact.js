import React from 'react'
import { Link,BrowserRouter as Router } from 'react-router-dom'
import AboveHeader from '../component/AboveHeader'
import Routing from '../component/Routing'
import Footer from '../component/Footer'
function Contact(props) {

   const handlSendMsg=()=>{
     alert('you message saved:thank You!')
    }
    return (
        <div>


{/* <!-- Top Bar Start --> */}
        <AboveHeader/>
        <Routing/>
        
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Contact Us</h2>
                    </div>
                    {/* <div className="col-12">
                        <a href="">Home</a>
                        <a href="">Contact</a>
                    </div> */}
                </div>
            </div>
        </div>
        {/* <!-- Page Header End -->
        
        
        <!-- Contact Start --> */}
        <div className="contact">
            <div className="container">
                <div className="section-header text-center">
                    <p>Get In Touch</p>
                    <h2>Contact for any query</h2>
                </div>
                <div className="contact-img">
                    <img src="img/contact1.png" alt="Image" />
                </div>
                <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-custom" type="submit" id="sendMessageButton" onClick={alert('successfully sent!')}>Send Message</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>   
        <Footer/>
      </div>
    )
}

export default Contact;
