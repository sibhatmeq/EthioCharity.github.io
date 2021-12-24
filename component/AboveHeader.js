import React, { Component } from 'react'
 class AboveHeader extends Component {
    render() {
        return (
            <div>
<div className="top-bar d-none d-md-block">
<div className="container-fluid">
    <div className="row">
        <div className="col-md-8">
            <div className="top-bar-left">
                <div className="text">
                    <i className="fa fa-phone-alt"></i>
                    <p>+251911454545</p>
                </div>
                <div className="text">
                    <i className="fa fa-envelope"></i>
                    <p>EthioCharityHub.com</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="top-bar-right">
                <div className="social">
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
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

export default AboveHeader


