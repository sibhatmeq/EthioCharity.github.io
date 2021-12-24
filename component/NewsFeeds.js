import React, { Component } from 'react'
import orgdata from './Organization_pages/organizations1'

class NewsFeeds extends Component {
    render() {
        return (
            <div>
                <div className="blog">
                <div className="container">
                    <div className="section-header text-center">
                        <p>EthioCharityHub</p>
                        <h2>Latest news & articles directly from ethiocharityhub</h2>
                    </div>
                    <div className="row">
                       {
                            orgdata.posts.map((newss)=>( 
                            <div className="col-lg-4">
                            <div className="blog-item"> 
                                <div className="blog-img">
                                <img src={newss.postLogo}alt="Image" />
                                </div>
                                <div className="blog-text">
                                    <h3><a href="#">{newss.postname}</a></h3>
                                    <p>
                                    {newss.postdisc}
                                    </p>
                                </div>
                                <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="/Donate">Donate now</a></p>
                                <p><i className="fa fa-share"></i><a href="/www.facebook.com">Share</a></p>
                                </div>
                            </div>
                          </div>   
                          )) 
                      }
                    </div>
                </div>
            </div>     
        </div>
        )
    }
}

export default NewsFeeds
