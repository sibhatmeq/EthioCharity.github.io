import React, { Component } from 'react'

class DonationStatus extends Component {
    render() {
        return (
            <div>
                <div className="facts" data-parallax="scroll" data-image-src="img/giver.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="facts-item">
                                <i className="flaticon-home"></i>
                                <div className="facts-text">
                                    <h3 className="facts-plus" data-toggle="counter-up">4</h3>
                                    <p>ተቋማት</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="facts-item">
                                <i className="flaticon-charity"></i>
                                <div className="facts-text">
                                    <h3 className="facts-plus" data-toggle="counter-up">150</h3>
                                    <p>አጋሮች</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="facts-item">
                                <i className="flaticon-kindness"></i>
                                <div className="facts-text">
                                    <h3 className="facts-dollar" data-toggle="counter-up">100000</h3>
                                    <p>የኛ ግብ</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="facts-item">
                                <i className="flaticon-donation"></i>
                                <div className="facts-text">
                                    <h3 className="facts-dollar" data-toggle="counter-up">20000</h3>
                                    <p>የተሰበሰበ</p>
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

export default DonationStatus
