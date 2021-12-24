import React from 'react'
import AboveHeader from '../component/AboveHeader'
import Footer from '../component/Footer'
import Routing from '../component/Routing'
function Donate() {
    return (
    <div>
        <AboveHeader/>
        <Routing/>
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Donate Now</h2>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End -->
        
    
        <!-- Donate Start --> */}
        <div className="container">
            <div className="donate" data-parallax="scroll" data-image-src="img/donate.jpg" />
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="donate-content">
                            <div className="section-header">
                                <p>Donate Now</p>
                                <h2>The happiest people are the givers,not the takers!!!</h2>
                            </div>
                            <div className="donate-text">
                                <p>
                                Charity is a fundamental norm of Ethiopians which is deeply waved into the culture.
                                This act of philanthropy is advocated in every culture, religion, and value that exists in Ethiopia.
                                Simply, we can state that it is part of what is being an Ethiopian. This adorable social value is 
                                also witnessed by foreigners as a manner of Ethiopians.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="donate-form">
                            <form>
                                <div className="control-group">
                                    <input type="text" className="form-control" placeholder="Name" required="required" />
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" placeholder="Email" required="required" />
                                </div>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-custom active">
                                        <input type="radio" name="options" checked /> 100br
                                    </label>
                                    <label className="btn btn-custom">
                                        <input type="radio" name="options" /> 1000br
                                    </label>
                                    <label className="btn btn-custom">
                                        <input type="radio" name="options" /> 500br
                                    </label>
                                </div>
                                <div>
                                    <button className="btn btn-custom" type="submit">Donate Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
    )
}

export default Donate
