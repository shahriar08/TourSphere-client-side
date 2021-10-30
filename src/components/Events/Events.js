import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Events.css'
const Events = (props) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-citadel-55965.herokuapp.com/events')
        .then((res) => res.json())
        .then((data) => {
            const sliceData = data.slice(0, props.limit ?? 100);
            setEvents(sliceData);
        })
    },[]);
    return (
        <div className='container mx-auto row'>
            {events.map((event) => (
                <Event key={event.id} event={event}></Event>
            ))}
        </div>
    );
};

export default Events;