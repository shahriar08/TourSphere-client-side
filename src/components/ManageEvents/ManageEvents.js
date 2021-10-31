import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';


const ManageEvents = () => {
    const [events, setEvent] = useState([]);
    const [isDeleted, setIsDeleted]= useState(null);
    useEffect(() => {
        fetch('https://sheltered-citadel-55965.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [isDeleted])

    function deleteProduct(id) {
        fetch(`https://sheltered-citadel-55965.herokuapp.com/deleteEvent/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if(result.deleteProduct){
                    setIsDeleted(true);
                }
                else{
                    setIsDeleted(false);
                }
            });

    }
    return (
        <>
            {   
                <div className='container mx-auto row'>
                    <h2 className='text-danger mt-5 text-center'>Delete an Event</h2>
                    {
                        events.map((event) => (
                            <div className='col col-md-6 col-lg-4 col-sm-12 text-center card-div g-5'>
                                <Card>
                                    <Card.Img variant="top" src={event?.image} />
                                    <Card.Body>
                                        <Card.Title className='fw-bold'>{event?.eventName}</Card.Title>
                                        <Card.Text className='text-danger fw-bold'>Duration: {event?.eventDuration} Day
                                        </Card.Text>
                                        <Card.Text className='fw-bold'>Event Cost: {event?.eventPrice} Taka
                                        </Card.Text>
                                        <Button onClick={() => deleteProduct(event?._id)} variant="warning">Delete</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            }
        </>
    );
};

export default ManageEvents;