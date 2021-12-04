import React from "react";
import './Projects.css';

import travel1 from '../../image/travel/travel.png';
import travel2 from '../../image/travel/Screenshot (6).png';
import travel3 from '../../image/travel/Screenshot (7).png';

import bike1 from '../../image/bike/bike.png';
import bike2 from '../../image/bike/Screenshot (8).png';
import bike3 from '../../image/bike/Screenshot (9).png';


import children1 from '../../image/children/children.png';
import children2 from '../../image/children/Screenshot (11).png';
import children3 from '../../image/children/Screenshot (12).png';
import children4 from '../../image/children/Screenshot (13).png';


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Projects = () => {

    return (
        <div className="Projects text-white">
            <h1 className="text-center mt-5 pt-5" >PROJECTS DETAILS</h1>
            <div className="my-5 ml-5">
                <h2 className="">(i) Travel.Com – A travel agency related website (Mern Stack)</h2>
            </div>
            <div id="work" className="carousel_parent">
                <div className="container">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={travel1} alt="" /></Slide>
                            <Slide index={0}><img src={travel2} alt="" /></Slide>
                            <Slide index={1}><img src={travel3} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn bg-dark">
                                <ButtonBack className="btn btn-primary mr-2">Back</ButtonBack>
                                <ButtonNext className="btn btn-primary">Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Overview</h2>
            <div className="ml-5 mb-5 pb-5">
                <h5>Details:</h5>
                <ul>
                    <li>
                    ➔ This website is Together-With-Travelagency Website
                    </li>
                    <li>
                    ➔ In this website i use react router
                    </li>
                    <li>
                    ➔ In this website i use parivate route
                    </li>
                    <li>
                    ➔ In this page i show six card and also details button
                    </li>
                    <li>
                    ➔ If you click the then it will go to the login page because that is a private route.
                    </li>
                </ul>
                <h5 className="mt-3">
                    Technology Used:
                </h5>
                <h6 className="fw-normal">React.js, Node.js, Express.js, MongoDB, Firebase, Heroku, Bootstrap5, React Bootstrap,Css, Html</h6>
                <h5 className="mt-3">
                    Previews:
                    <a href="https://together-with-travelagency.web.app/">Live Site</a>
                    ||
                    <a href="https://github.com/sabbirNew/TravelAgency">Client Side</a>
                    ||
                    <a href="https://github.com/sabbirNew/tourisum-server">Server Side</a>
                </h5>
            </div>



            <div className="my-5 ml-5">
                <h2 className="">(i) Bike.Com – Bike shels related website (Mern Stack)</h2>
            </div>
            <div id="work" className="carousel_parent">
                <div className="container">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={bike1} alt="" /></Slide>
                            <Slide index={0}><img src={bike2} alt="" /></Slide>
                            <Slide index={1}><img src={bike3} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn bg-dark">
                                <ButtonBack className="btn btn-primary mr-2">Back</ButtonBack>
                                <ButtonNext className="btn btn-primary">Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Overview</h2>
            <div className="ml-5 mb-5 pb-5">
                <h5>Details:</h5>
                <ul>
                    <li>➔ This website represents a bike selling store.
                    </li>
                    <li>
                    ➔ I use firebase for user authentication.
                    </li>
                    <li>
                    ➔ I use mongodb for storing data.
                    </li>
                    <li>
                    ➔ I put both admin and a normal user route private.
                    </li>
                    <li>
                    ➔ Only a logged in user or admin is allowed access to the dashboard.
                    </li>
                </ul>
                <h5 className="mt-3">
                    Technology Used:
                </h5>
                <h6 className="fw-normal">React.js, Node.js, Express.js, MongoDB, Firebase, Heroku, Bootstrap5, React Bootstrap,Css, Html</h6>
                <h5 className="mt-3">
                    Previews:
                    <a href="https://bike-sales-point.web.app/">Live Site</a>
                    ||
                    <a href="https://github.com/sabbirNew/Bike-Sales-Point">Client Side</a>
                    ||
                    <a href="https://github.com/sabbirNew/bike-sales-point-server">Server Side</a>
                </h5>
            </div>
            <div className="my-5 ml-5">
                <h2 className="">(iii) Children Learning clubs – related website (Frontend)</h2>
            </div>
            <div id="work" className="carousel_parent">
                <div className="container">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={4}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={children1} alt="" /></Slide>
                            <Slide index={0}><img src={children2} alt="" /></Slide>
                            <Slide index={1}><img src={children3} alt="" /></Slide>
                            <Slide index={1}><img src={children4} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn bg-dark">
                                <ButtonBack className="btn btn-primary mr-2">Back</ButtonBack>
                                <ButtonNext className="btn btn-primary">Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Overview</h2>
            <div className="ml-5 mb-5 pb-5">
                <h5>Details:</h5>
               


                <ul>
                    <li>
                    ➔ This site is for children learning clubs .
                    </li>
                    <li>
                    ➔ If u click home, servivecs, about and details then u will go to another page .
                    </li>
                    <li>
                    ➔ On this website I use react router
                    </li>
                    <li>
                    ➔ I use some css library to make the site responsive 
                    </li>
                    <li>
                    ➔ I use netlify for deploymet.
                    </li>
                </ul>
                <h5 className="mt-3">
                    Technology Used:
                </h5>
                <h6 className="fw-normal">React.js, Firebase, Bootstrap5, React Bootstrap, Css, Html.</h6>
                <h5 className="mt-3">
                    Previews:
                    <a href="https://dreamy-kepler-b4c65d.netlify.app/">Live Site</a>
                    ||
                    <a href="https://github.com/sabbirNew/children-learning">Client Side</a>
                </h5>
            </div>
        </div>

    );
};

export default Projects;