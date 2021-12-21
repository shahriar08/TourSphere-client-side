import React from 'react';
import CountUp from 'react-countup';

const Counting = () => {
    return (
        <div className='container g-5 mb-5 mt-5'>
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-1">
                <div className="col">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title text-danger ">Current Events</h5>
                            <h2 className=''><CountUp start={0} end={219} duration={2} separator=',' /></h2>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        
                        <div className="card-body text-center">
                            <h5 className="card-title text-danger ">Happy Customers</h5>
                            <h2 className=''><CountUp start={0} end={3190} duration={2} separator=',' /></h2>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title text-danger ">Total Events Managed</h5>
                            <h2 className=''><CountUp start={0} end={1494} duration={2} separator=',' /></h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Counting;