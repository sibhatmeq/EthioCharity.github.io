import React from "react";
import AboveHeader from "../component/AboveHeader";
import Footer from "../component/Footer";
import Routing from "../component/Routing";

function Volunteer() {
  return (
    <div>
      <AboveHeader />
      <Routing />

      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Volunteer</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Volunteer</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="volunteer"
          data-parallax="scroll"
          data-image-src="img/volunteer.jpg"
        >
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="volunteer-form">
                <form>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      placeholder="Why you want to become a volunteer?"
                      required="required"
                    ></textarea>
                  </div>
                  <div>
                    <button className="btn btn-custom" type="submit">
                      በጎነት ለራስ ነው፡፡
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="volunteer-content">
                <div className="section-header">
                  <p>ኑ አብረን እንርዳ</p>
                  <h2>አንድ ላይ በመተባበር ለውጥ እናምጣ</h2>
                </div>
                <div className="volunteer-text">
                  <p>
                  Charity is a fundamental norm of Ethiopians which is deeply waved into the culture.
                  This act of philanthropy is advocated in every culture, religion, and value that exists in Ethiopia.
                  Simply, we can state that it is part of what is being an Ethiopian. This adorable social value is 
                  also witnessed by foreigners as a manner of Ethiopians.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Volunteer;
