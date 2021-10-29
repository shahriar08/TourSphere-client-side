import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from './landscape-with-mountains.jpg'
import banner2 from './vestrahorn-mountains-sunset-stokksnes-iceland.jpg'
import banner3 from './yosemite-national-park-yosemite-valley-usa.jpg'
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel opacity-75"
                        src={banner1}
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
                        src={banner2}
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
                        src={banner3}
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