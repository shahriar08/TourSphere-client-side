import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            {/* <div className="row d-flex align-items-top faq mt-5 pt-3">
                <div className="col-md-6 col-sm-12">
                    <div className='mx-auto w-50 mt-5'>
                        <h1 className='fs-1 mt-5'>Find Your Perfect</h1>
                        <h1 className='fs-1'>Vacation</h1>
                        <Link to='/event'><Button className='mt-3' variant="danger">Explore More</Button></Link>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 header-bike  mb-5 d-flex justify-content-center">
                    <img
                        src="https://i.ibb.co/vjL9Z42/2507337.jpg"
                        className="faq-img"
                        alt="..."
                    />
                </div>

            </div> */}

            <header>
                <div className="overlay"></div>


                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"></source>
                </video>

                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3 fw-bold">Find Your Perfect Vacation</h1>
                            <p className="lead mb-0">A Simply Perfect Place To Get Lost
                                Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make</p>
                                <Link to='/event'><Button className='mt-3' variant="danger">Explore More</Button></Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    );
};

export default Banner;               