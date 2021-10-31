import React from 'react';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import FAQ from '../FAQ/FAQ';
import Layout from '../Layout/Layout';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Layout>
                <Banner></Banner>
                <h2 className='mt-5 text-danger fw-bold text-center'>Our Best Events</h2>
                <Events></Events>
                <UpcomingEvents></UpcomingEvents>
                <FAQ></FAQ>
            </Layout>
        </div>
    );
};

export default Home;