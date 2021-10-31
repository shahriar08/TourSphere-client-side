import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Event.css'
const Event = (props) => {
    const {id,image,eventName,eventDuration,eventPrice} = props.event;
    const history = useHistory();

    const handleEventClick = () => {
        history.push(`/bookEvent/${id}`);
    };

    return (
        <div className='col col-md-6 col-lg-4 col-sm-12 text-center card-div g-5'>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{eventName}</Card.Title>
                    <Card.Text className='text-danger fw-bold'>Duration: {eventDuration} Day
                    </Card.Text>
                    <Card.Text className='fw-bold'>Event Cost: {eventPrice} Taka
                    </Card.Text>
                    <Button onClick={handleEventClick} variant="warning">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Event;