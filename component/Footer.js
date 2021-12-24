import React, { Component } from 'react'

 class Footer extends Component {
    render() {
        return (
            <div>
                 <div className="footer">
               
               <div className="container">
                      <div className="row">
                          <div className="col-lg-3 col-md-6">
                              <div className="footer-contact">
                                  <h2>Our Head Office</h2>
                                  <p><i className="fa fa-map-marker-alt"></i>Addisabeba, Ethiopia</p>
                                  <p><i className="fa fa-phone-alt"></i>+25140172312</p>
                                  <p><i className="fa fa-envelope"></i>ethiocharityhub.com</p>
                                  <div className="footer-social">
                                      <a className="btn btn-custom" href=""><i className="fab fa-twitter"></i></a>
                                      <a className="btn btn-custom" href=""><i className="fab fa-facebook-f"></i></a>
                                      <a className="btn btn-custom" href=""><i className="fab fa-youtube"></i></a>
                                      <a className="btn btn-custom" href=""><i className="fab fa-instagram"></i></a>
                                      <a className="btn btn-custom" href=""><i className="fab fa-linkedin-in"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                              <div className="footer-link">
                                  <h2>Popular Links</h2>
                                  <a href="">About Us</a>
                                  <a href="">Contact </a>
                                  <a href="">catagories</a>
                                  <a href="">Events</a>
                                  <a href="">News</a>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                              <div className="footer-link">
                                  <h2>Useful Links</h2>
                                  <a href="">Terms of use</a>
                                  <a href="">Privacy policy</a>
                                  <a href="">Cookies</a>
                                  <a href="">Help</a>
                                  <a href="">FQAs</a>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                              <div className="footer-newsletter">
                                  <h2>subscribe</h2>
                                  <form>
                                      <input className="form-control" placeholder="Email goes here" />
                                      <button className="btn btn-custom">Submit</button>
                                      <label>....!</label>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
                 
               <div className="container copyright">
                      <div className="row">
                          <div className="col-md-6">
                              <p>&copy; <a href="#">EthioCharityHub</a>, All Right Reserved.</p>
                          </div>
                          <div className="col-md-6">
                              <p>Designed By <a href="https://ethiocharityhun.com">S^3Y^2</a></p>
                          </div>
                      </div>
                  </div>
          </div>
            </div>
        )
    }
}

export default Footer
