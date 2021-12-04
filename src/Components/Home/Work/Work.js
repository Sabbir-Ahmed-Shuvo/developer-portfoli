import React from 'react';
import './Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// full stack
import img1 from '../../../image/travel.png';
import img2 from '../../../image/bike.png';
import img3 from '../../../image/children.png';




import { Link } from 'react-router-dom';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
    return (
        <div className="container">
            <h1 className="text-center text-white mb-5 " > MY PROJECTS</h1>
            <div className="card-deck pb-5">
                <div className="card img-hover-zoom">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">❖Together-With-Travelagency</h5>
                        <Link to="/project"><button className="card-text btn btn-primary">More Details</button></Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-danger"><a href="https://together-with-travelagency.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />View Site</a></small>
                    </div>
                </div>

                <div className="card img-hover-zoom">
                    <img src={img2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">❖Bike Sales Point</h5>
                        <Link to="/project"><button className="card-text btn btn-primary">More Details</button></Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-danger"><a href="https://bike-sales-point.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />View Site</a></small>
                    </div>
                </div>
                <div className="card img-hover-zoom">
                    <img src={img3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">❖Children Learning Clubs</h5>
                        <Link to="/project"><button className="card-text btn btn-primary">More Details</button></Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-danger"><a href="https://dreamy-kepler-b4c65d.netlify.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />View Site</a></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;