import React , {useState , useContext , useEffect} from 'react'
import Routing from '../../Routing'
import AboveHeader from '../../AboveHeader'
import Footer from '../../Footer'
import { useParams } from 'react-router'
import MaterailDonate from '../../MaterialDonate/MaterailDonate'
import DonateBY from '../../../pages/DonationBy'
import {DataContext , DataProvider , createAxios} from '../../../context_providers/data.js'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Promise from '../../../component/sibe/Promise/Promise'
import Appointment from '../../../component/sibe/Appointment'



export default function DetailPage() {
    const {id} = useParams() ;
    const [data , setData] = useState([]) ;
    const [agentData,setAgentData]=useState([]);
     
    useEffect(() => {
        const fetchData = async() => {
            try{

                console.log('trying to connect!!!!!!!!!!!!!1')
                const Event_response = await axios.get(`http://localhost:4000/api/v1/agent?org=${id}`) ;

                const res = await axios.get(`http://localhost:4000/api/v1/orgs/${id}`)  ;

                 setData(res.data.data) ;
                console.log(Event_response.data.data.Agents) ;
                setAgentData(Event_response.data.data.Agents)
            } catch(err) {
                // console.log('error has occured ' + err) ;
                console.log(err) ;
                // console.log(err.response.status) ;
                // console.log(err.response.headers) ;
            }
            
        } 
        fetchData() ;
    }, [])
    // const [Events , setEvents ] = useContext(DataContext) ;

        
            
        return (
            <div>
                <AboveHeader/>
            <Routing/>
        
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2></h2>
                        <h2 style={{textAlign:'center'}}><DonateBY/></h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="single-content">
                            <img src={data.imagePath} />
                            <h2>{data.name}</h2>
                            <p>
                               {data.description}
                               </p>
                            <p>
                               the this is time MerryJoy help more than 500 mothers and other childers.
                               the this is time MerryJoy help more than 500 mothers and other childers.
                                MerryJoy give them works for those who can works and help themself
                            </p>
                        </div>
                        <div className="single-tags">
                            <a href="">kotebe HealthAndFoodMerja</a>
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
                        <div >
                        <MaterailDonate/>
                        <Promise />
                        < Appointment />
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
                                            <a href="">This from HealthAndFoodMerja</a>
                                            <div className="post-meta">
                                                <p>By<a href="">Donate now</a></p>
                                                <p><a href="">donate now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <div className="post-img">
                                            <img src="img/post-2.jpg" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">This from HealthAndFoodMerja</a>
                                            <div className="post-meta">
                                                <p>By<a href="">Donate now</a></p>
                                                <p><a href="">donate now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <div className="post-img">
                                            <img src="img/post-3.jpg" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">This from HealthAndFoodMerja</a>
                                            <div className="post-meta">
                                                <p>By<a href="">Donate now</a></p>
                                                <p><a href="">donatNow</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <div className="post-img">
                                            <img src="img/post-4.jpg" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">This from HealthAndFoodMerja</a>
                                            <div className="post-meta">
                                                <p>By<a href="">Donate now</a></p>
                                                <p><a href="">donate now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <div className="post-img">
                                            <img src="img/post-5.jpg" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">This from HealthAndFoodMerja</a>
                                            <div className="post-meta">
                                                <p>By<a href="">Donate now</a></p>
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
                                               agentData.map((agentss)=>(
                                                <div className="post-item">
                                                <p>{agentss.name}</p>
                                                <div className="post-img">
                                                    <img src={`http://localhost:4000/${agentss.imagePath}`} />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">{agentss.name}</a>
                                                    <div className="post-meta">
                                                        <p><a href="">Donate now</a></p>
                                                        <p><a href="">donate now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                               ))
                                                                                          
                                           }
                                            
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-2.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">This from addisabeba</a>
                                                    <div className="post-meta">
                                                        <p><a href="">Donate now</a></p>
                                                        <p><a href="">donate now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-3.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">This from ethioia</a>
                                                    <div className="post-meta">
                                                        <p><a href="">Donate now</a></p>
                                                        <p><a href="">donate now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-4.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">This from adama</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">donate now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-item">
                                                <div className="post-img">
                                                    <img src="img/post-5.jpg" />
                                                </div>
                                                <div className="post-text">
                                                    <a href="">This from desse</a>
                                                    <div className="post-meta">
                                                        <p>By<a href="">Donate now</a></p>
                                                        <p><a href="">donate now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="popular" className="container tab-pane fade">
                                          
                                                
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

