import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Section.css'

const Sections = () => {
    return (
        <div className='container section'>
            <div className="row d-flex align-items-top mt-5 pt-5">
                <div className="col-md-6 col-sm-12 mb-5 d-flex justify-content-center">
                    <img
                        src="https://i.ibb.co/db4L8c6/bali.jpg"
                        className="sec-img"
                        alt="..."
                    />
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className='mx-auto w-60 mt-5'>
                        <h1 className='fs-1 mt-5'>
                            A Simply Perfect Place To Get Lost</h1>
                        <p>Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.</p>
                        <Link to='/event'><Button className='mt-3' variant="danger">Explore More</Button></Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Sections;