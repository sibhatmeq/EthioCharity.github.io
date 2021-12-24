import React from 'react'

function Videos() {
    return (
        <div>
            <div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                             <p>hello</p>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Videos;