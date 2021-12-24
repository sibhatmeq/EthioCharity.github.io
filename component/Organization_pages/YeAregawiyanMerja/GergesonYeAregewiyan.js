import React, { Component } from 'react'
import Routing from '../../Routing'
import AboveHeader from '../../AboveHeader'
import Footer from '../../Footer'
import MaterailDonate from '../../MaterialDonate/MaterailDonate'
import DetailPages from '../DetailPages/DetailPages'
import DonateBY from '../../../pages/DonationBy'
class GergesonYeAregawiyan extends Component {
    render() {
        return (
 <div>
            <AboveHeader/>
            <Routing/>
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>GergesonYeAregawiyan Merja</h2>
                        {/* <h2 style={{textAlign:'center'}}><DonateBY/></h2>                    */}
                         </div> 
                </div>
            </div>
        </div>
        
        <div className="single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="single-content">
                            <img src="img/mekedonia1.jpg" />
                            <h2>...</h2>
                            <p>
                               GergesonYeAregawiyan Merja organizations is was established in 1998 by 
                               the this is time gergeson help more than 500 mothers and other childers.
                                gergeson give them works for those who can works and help themself.

                                GergesonYeAregawiyan Merja organizations is was established in 1998 by 
                               the this is time gergeson help more than 500 mothers and other childers.
                                gergeson give them works for those who can works and help themself.
                               </p>
                            <p>
                                 
                               GergesonYeAregawiyan Merja organizations is was established in 1998 by 
                               the this is time gergeson help more than 500 mothers and other childers.
                                gergeson give them works for those who can works and help themself.
                            
                            </p>
                        </div>
                    
                        <div className="single-bio">
                            <div className="single-bio-img">
                                <img src="img/user.jpg" />
                            </div>
                            <div className="single-bio-text">
                                <h3>Head office</h3>
                                <p>
                                    ato surafel is the head of gergeson charity organizations
                                    located in addis abeba in different kifle adisKetema.
                                </p>
                            </div>
                        </div>
                        <MaterailDonate/>
                    </div>

                    <div className="col-lg-4">
                        <div className="sidebar">
                            <div className="sidebar-widget">
                                <div className="search-widget">
                                    <form>
                                        <input className="form-control" type="text" placeholder="Search Keyword" />
                                        <button className="btn"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div className="sidebar-widget">
                                <h2 className="widget-title">Recent Post</h2>
                                <div className="recent-post">
                                    <div className="post-item">
                                        <div className="post-img">
                                            <img src="img/post-1.jpg" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">YeGergesonYeAregawiyanMerja</a>
                                            <div className="post-meta">
                                                <p><a href="/Donate">Donate now</a></p>
                                                <p><a href="/Donate">donate now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                    <div className="post-item">
                                        <div className="post-img">
                                            <img src="img/post-4.jpg" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">this from GergesonYeAregawiyanMerja</a>
                                            <div className="post-meta">
                                                <p><a href="">Donate now</a></p>
                                                <p><a href="">donate now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>

                            <div className="sidebar-widget">
                                <div className="image-widget">
                                    <a href="#"><img src="img/blog-1.jpg" alt="Image" /></a>
                                </div>
                            </div>

                            <div className="sidebar-widget">
                                <div className="tab-post">
                                    <ul className="nav nav-pills nav-justified">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="pill" href="#featured">Our Supporters</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                      <div id="featured" className="container tab-pane active">
                                            {
                                             DetailPages.map((org,index)=>(
                                            <div className="post-item">
                                                  <div className="post-img">
                                                    <img src={org.profilePic}/>
                                                  </div>
                                                <div className="post-text">
                                                         <a href="">{org.title}</a>
                                                      <div className="post-meta">
                                                        <p><a href="">{org.orgprofile.paragraph1}</a></p>
                                                        <p><a href="">{org.orgprofile.paragraph2}</a></p>
                                                      </div>
                                                  </div>
                                             </div>
                                                ))
                                               }                                     
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-widget">
                                <div className="image-widget">
                                    <a href="#"><img src="img/blog-2.jpg" alt="Image" /></a>
                                </div>
                            </div>
                            <div className="sidebar-widget">
                                <div className="image-widget">
                                    <a href="#"><img src="img/blog-3.jpg" alt="Image" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     <Footer/> 
  </div>
  
        )
    }
}

export default GergesonYeAregawiyan;
