import React, { Component } from 'react'

 class HomeEvent extends Component {

    state = {
        date: ""
      };
    
      componentDidMount() {
        this.getDate();
      }
    
      getDate = () => {
        var date = new Date().toDateString();
        this.setState({ date });
      };

    render() {
        return (
            <div>
                <div className="event">
                <div className="container">
                    <div className="section-header text-center">
                        <p>ልዩ ዝግጅቶች</p>
                        <h2>ፕሮግራሞቻችን መጥተው ይታደሙ</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="event-item">
                                <img src="img/event-1.jpg" alt="Image" />
                                <div className="event-content">
                                    <div className="event-meta">
                                        <p><i className="fa fa-calendar-alt"></i>{this.state.date}</p>
                                        <p><i className="far fa-clock"></i>8:00 - 10:00</p>
                                        <p><i className="fa fa-map-marker-alt"></i>addisabeba</p>
                                    </div>
                                    <div className="event-text">
                                        <h3>የእናቶች ቀን</h3>
                                        <p>
                                        Charity is a fundamental norm of Ethiopians which is deeply waved into the culture.
                                        This act of philanthropy is advocated in every culture, religion, and value that exists in Ethiopia.
                                                         </p>
                                        <a className="btn btn-custom" href="/Register">Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-item">
                                <img src="img/event-2.jpg" alt="Image" />
                                <div className="event-content">
                                    <div className="event-meta">
                                        <p><i className="fa fa-calendar-alt"></i>{this.state.date}</p>
                                        <p><i className="far fa-clock"></i>2:40-10:00</p>
                                        <p><i className="fa fa-map-marker-alt"></i>addis abeba</p>
                                    </div>
                                    <div className="event-text">
                                        <h3>የፍቅር ቀን</h3>
                                        <p>
                                        Charity is a fundamental norm of Ethiopians which is deeply waved into the culture.
                                        This act of philanthropy is advocated in every culture, religion, and value that exists in Ethiopia.
                                                        </p>
                                        <a className="btn btn-custom" href="/Register">Join Now</a>
                                    </div>
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

export default HomeEvent
