import React, { Component } from 'react'
import Routing from '../../Routing'
import AboveHeader from '../../AboveHeader'
import Footer from '../../Footer'
class MudayYeFestula extends Component {
    render() {
        return (
    <div>
            <AboveHeader/>
            <Routing/>
        
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>MudayYeFistula Merja Organization</h2>
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
                               Muday YeFestulaMerja charity organizations is was established in 1998 by 
                               the 
                               </p>
                            <p>
                                this is time muday help more than 500 mothers and other childers.
                                muday give them works for those who can works and help themself. 
                            
                        
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
                                    ato surafel is the head of yaregawiMerja charity organizations
                                    located in addis abeba in different kifle adisKetema.
                                </p>
                            </div>
                        </div>
                        <div className="share -form">
                            <h2>Leave a comment </h2>
                            <form>
                                <div className="form-group">
                                    <label for="name">Name *</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email *</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group">
                                    <label for="website">Website</label>
                                    <input type="url" className="form-control" id="website" />
                                </div>

                                <div className="form-group">
                                    <label for="message">Message *</label>
                                    <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Post Share " className="btn btn-custom" />
                                </div>
                            </form>
                        </div>
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
                                            <a href="">this from muday YeFestulaMerja</a>
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
                                            <a href="">this from muday YeFestulaMerja</a>
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
                                            <a href="">this from muday YeFestulaMerja</a>
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
                                            <a href="">this from muday YeFestulaMerja</a>
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
                                            <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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
                                                    <a href="">this from muday YeFestulaMerja</a>
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

export default MudayYeFestula;
