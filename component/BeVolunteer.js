import React, { Component } from 'react'

class BeVolunteer extends Component {
    render() {
        return (
            <div>
               <div className="volunteer" data-parallax="scroll" data-image-src="img/volunteer.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <div className="col-lg-5">
                            <div className="volunteer-form">
                                <form>
                                    <div className="control-group">
                                        <input type="text" className="form-control" placeholder="Name" required="required" />
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control" placeholder="Email" required="required" />
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control" placeholder="Why you want to become a volunteer?" required="required"></textarea>
                                    </div>
                                    <div>
                                        <button className="btn btn-custom" type="submit">Become a volunteer</button>
                                    </div>
                                </form>
                            </div>
                        </div> */}
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
            </div>
        )
    }
}

export default BeVolunteer
