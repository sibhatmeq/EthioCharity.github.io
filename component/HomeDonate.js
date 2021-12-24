import React, { Component } from 'react'

class HomeDonate extends Component {
    render() {
        return (
            <div>
                <div className="donate" data-parallax="scroll" data-image-src="img/donate.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="donate-content">
                                <div className="section-header">
                                    {/* <p>Donate Now</p> */}
                                    <h2>የተቸገሩትን በመርዳት ለተሻለ ህይወት እናብቃ</h2>
                                </div>
                                <div className="donate-text">
                                    <p>
                    

Your generous gift will help us fund our mission to help those in need. 
Together, we can make a difference. 

Your tax-deducible donation will be processed by Noble Humanitarian Missions a 
 organization. 
                                  </p>
                                </div>
                            </div>
                        </div>
                         {/* <div className="col-lg-5">
                            <div className="donate-form">
                                <form>
                                    <div>
                                    {/* <button className="btn btn-custom" type="submit"
                                     onClick={()=>{this.props.history.push('/Causes')}}>Donate Now</button> */}
                                        {/* <a href="/Causes" className="gotoDonate">Donate Now</a> 
                                    </div>
                                </form>
                            </div>
                        </div>  */}

                    </div>
                </div>
            </div>
         </div>
        )
    }
}

export default HomeDonate
