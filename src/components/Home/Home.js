import React from 'react';
import Banner from '../Banner/Banner';
import Counting from '../Counting/Counting';
import Events from '../Events/Events';
import FAQ from '../FAQ/FAQ';
import Layout from '../Layout/Layout';
import Sections from '../Sections/Sections';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Layout>
                <Banner></Banner>
                <Counting/>
                <Sections/>
                <h2 className='mt-5 text-danger fw-bold text-center'>Our Best Events</h2>
                <Events></Events>

                <UpcomingEvents></UpcomingEvents>
                <FAQ></FAQ>
            </Layout>
        </div>
    );
};

export default Home;