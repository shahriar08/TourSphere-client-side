import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './EventDetails.css'
const EventDetails = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        fetch('https://sheltered-citadel-55965.herokuapp.com/events')
            .then((res) => res.json())
            .then((data) => {
                const eventById = data.filter((event) => event.id === Number(eventId));
                setEvent(eventById.length ? eventById[0] : {});
            });
    }, []);
    return (
        <div className="contacts container d-flex justify-content-center mt-5 row mx-auto">
            <div className="contact col-lg-4 col-md-4">
                <div>
                    <Card>
                        <Card.Img variant="top" src={event.image} />
                        <Card.Body>
                            <Card.Title className='text-danger fw-bold'>{event.eventName}</Card.Title>
                            <Card.Title>{event.eventDuration}</Card.Title>

                            <Card.Text>
                                {event.eventInfo}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="contact col-lg-4 col-md-6">
                <h3 className=" fw-bold">Book Now</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Your Name" />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="phone" placeholder="Enter your Mobile Number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button className="btn btn-danger fw-bold">Submit</Button>{' '}
                </Form>
            </div>
        </div>
    );
};

export default EventDetails;