import React from 'react';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import Layout from '../Layout/Layout';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Layout>
                <Banner></Banner>
                <h3>This is home</h3>
                <Events></Events>
            </Layout>
        </div>
    );
};

export default Home;