import React from 'react';
import { Accordion } from 'react-bootstrap';
import './FAQ.css'
const FAQ = () => {
    return (
        <div className="container">
            <h1 className=" text-center mt-5 pt-5 text-danger">Frequently Asked Questions</h1>
            <div className="row d-flex align-items-top faq mt-5 pt-3">
                <div className="col-md-6 col-sm-12 header-bike  mb-5 d-flex justify-content-center">
                    <img
                        src="https://i.ibb.co/dtZkp7P/2895133.jpg"
                        className="faq-img"
                        alt="..."
                    />
                </div>
                <div className="col-md-6 col-sm-12">
                    <div>
                        <div className="accordion-item my-3 rounded">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="fw-bold">Can i get any discount</Accordion.Header>
                                    <Accordion.Body>
                                        Sometime we provide some good discount on any trip,Check our website for details.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How can i pay for any trip</Accordion.Header>
                                    <Accordion.Body>
                                        You can paid by cash,card etc.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Is this event have any hidden charge </Accordion.Header>
                                    <Accordion.Body>
                                        No.Our given cost is all inclusive.So please don't about our given charge
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Can i get all the facilities by TourSphere</Accordion.Header>
                                    <Accordion.Body>
                                        Yes.You will get all the facilities which are include in the description.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FAQ;