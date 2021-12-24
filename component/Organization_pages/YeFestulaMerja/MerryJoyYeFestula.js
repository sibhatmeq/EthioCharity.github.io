import React, { Component } from 'react'
import Routing from '../../Routing'
import AboveHeader from '../../AboveHeader'
import Footer from '../../Footer'
import { useParams } from 'react-router'
import MaterailDonate from '../../MaterialDonate/MaterailDonate'
class MerryJoyFestula extends Component {
    render() {
        
        return (
            <div>
                <AboveHeader/>
            <Routing/>
        
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>MerryJoyFestula Merja Organization</h2>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="single-content">
                            <img src="img/single.jpg" />
                            <h2>Help Mothers:Help Ethiopia</h2>
                            <p>
                               MerryJoyFestula Merja organizations is was established in 1998 by 
                               the 
                               </p>
                            <p>
                                this is time MerryJoy help more than 500 mothers and other childers.
                                MerryJoy give them works for those who can works and help themself. 
                            
                            </p>
                        </div>
                        <div className="single-tags">
                            <a href="">kotebe YeFestulaMerja</a>
                        </div>
                        <div className="single-bio">
                            <div className="single-bio-img">
                                <img src="img/user.jpg" />
                            </div>
                            <div className="single-bio-text">
                                <h3>Head office</h3>
                                <p>
                                    ato surafel is the head of MerryJoyFestula charity organizations
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
                                            <a href="">this from MerryJoy YeFestulaMerja</a>
                                            <div className="post-meta">
                                                <p>By<a href="">Donate now</a></p>
                                                <p><a href="">help now save now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <div className="post-img">
                                            <img src="img/post-2.jpg" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">this from MerryJoy YeFestulaMerja</a>
                                            <div className="post-meta">
                                                <p>By<a href="">Donate now</a></p>
                                                <p><a href="">help now save now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <div className="post-img">
                                            <img src="img/post-3.jpg" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">this from MerryJoy YeFestulaMerja</a>
                                            <div className="post-meta">
                                                <p>By<a href="">Donate now</a></p>
                                                <p><a href="">help now..save now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <div className="post-img">
                                            <img src="img/post-4.jpg" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">this from MerryJoy YeFestulaMerja</a>
                                            <div className="post-meta">
                                                <p>By<a href="">Donate now</a></p>
                                                <p><a href="">help now save now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <div className="post-img">
                                            <img src="img/post-5.jpg" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">this from MerryJoy YeFestulaMerja</a>
                                            <div className="post-meta">
                                                <p>By<a href="">Donate now</a></p>
                                                <p><a href="">help now save now</a></p>
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
                                            <a className="nav-link active" data-toggle="pill" href="#featured">Featured</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" href="#popular">Popular</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" href="#latest">Latest</a>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div id="featured" className="container tab-pane active">
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-1.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-2.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-3.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-4.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-5.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="popular" className="container tab-pane fade">
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-1.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-2.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-3.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-4.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-5.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="latest" className="container tab-pane fade">
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-1.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-2.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-3.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-4.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-5.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">this from MerryJoy YeFestulaMerja</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">help now save now</a></p>
                                                    </div>
                                                </div>
                                            </div>
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

export default MerryJoyFestula
