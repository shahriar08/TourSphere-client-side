import React from 'react';
import Banner from '../Banner/Banner';
import Layout from '../Layout/Layout';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Layout>
                <Banner></Banner>
                <h3>This is home</h3>
            </Layout>
        </div>
    );
};

export default Home;