import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel opacity-75"
                        src="https://i.ibb.co/HGvzLCB/vestrahorn-mountains-sunset-stokksnes-iceland-2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='carousel-f1 mx-auto w-50'>Find Your Perfect</h1>
                        <h1 className='carousel-f2 mx-auto w-50'>Vacation</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel opacity-75"
                        src="https://i.ibb.co/cLnqwM6/yosemite-national-park-yosemite-valley-usa-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='carousel-f1 mx-auto w-50'>Find Your Perfect</h1>
                        <h1 className='carousel-f2 mx-auto w-50'>Vacation</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel opacity-75"
                        src="https://i.ibb.co/xYVrg5N/landscape-with-mountains-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className=''>
                        <h1 className='carousel-f1 mx-auto w-50'>Find Your Perfect</h1>
                        <h1 className='carousel-f2 mx-auto w-50'>Vacation</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;               