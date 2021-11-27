import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-top faq mt-5 pt-3">
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

            </div>
        </div>
    );
};

export default Banner;               