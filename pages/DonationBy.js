import React from 'react'
import AboveHeader from '../component/AboveHeader'
import Footer from '../component/Footer'
import Routing from '../component/Routing'
function DonateBY() {
    return (
    <div>
        {/* <AboveHeader/>
        <Routing/>
        <div className="page-header">S
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
        <div className="container" style={{textAlign:'center'},{color:'green'} }>
            <div className="donate" data-parallax="scroll" data-image-src=""alt="" />
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="donate-form" >
                            <form>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-custom active" style={{color:'white'} }>
                                        <input type="radio" name="options" checked /> $100
                                    </label>
                                    <label className="btn btn-custom"style={{color:'white'} }>
                                        <input type="radio" name="options" /> $10
                                    </label>
                                    <label className="btn btn-custom"style={{color:'white'}}>$1000
                                        <input type="radio" name="options" /> 
                                    </label>
                                 </div>
                                {/*  <div className="control-group">
                                    <input type="text" className="form-control" placeholder="Name" required="required" />
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" placeholder="Email" required="required" />
                                </div>  */}
                                  
                                <div>
                                    <button className="btn btn-custom" type="submit" style={{color:'white'}
                                      
                                      }>Donate Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default DonateBY
