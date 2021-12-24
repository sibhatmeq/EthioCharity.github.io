import React, { Component } from 'react'

class MovingBackGround extends Component {
    render() {
        return (
    <div>
        <div className="wrap">
            <div >
                <div >
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                {/* <img className="about-img" data-parallax="scroll" src="img/carousel-1.jpg" alt="First slide" /> */}
                                <div className="carousel-caption d-none d-md-block">
                        
                                  <h1><p><a href="/Donate">Donate now</a></p></h1>
                                </div>
                            </div>
                            {/* <div className="carousel-item">
                                <img className="d-block w-100" src="img/carousel-2.jpg" alt="Second slide" />
                            </div> */}
                            
                            <div className="carousel-item">
                                <img className="d-block w-100" src="img/mkk1.jpg" alt="Third slide" />
                            </div>
                        </div>
                        {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
  </div>
        )
    }
}

export default MovingBackGround
