import React, { Component } from 'react'

class MaterailDonate extends Component {
    render() {
        return (
            <div>
                <div className="share -form">
                            <h2>donate Materials fill the form </h2>
                            <form>
                                <div className="form-group">
                                    <label for="name">Name *</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                
                                <div className="form-group">
                                    <label for="website">Your phone number</label>
                                    <input type="number" className="form-control" id="website" placeholder="phone number" />
                                </div>

                                <div className="form-group">
                                    <label for="message"> write amount and type *</label>
                                    <textarea id="" cols="30" rows="5" className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <label for="website">lacation detail</label>
                                    <input type="text" className="form-control" id="website" />
                                </div>
                                <div className="form-group">
                                <button className="btn btn-custom" >sumbit</button>
                                    
                                </div>
                            </form>
                        </div>
            </div>
        )
    }
}

export default MaterailDonate
