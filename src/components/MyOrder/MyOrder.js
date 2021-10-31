import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-citadel-55965.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    return (
        <div className='orders-table table-responsive'>
            <table className="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">Event Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map(order => {
                            return <tr>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.mobileNo}</td>
                                <td>{order.address}</td>
                                <td>{order.price}</td>
                                <td>{order.orderDateTime}</td>
                                <td></td>
                            </tr>

                        })
                    }

                </tbody>
            </table>

        </div>
    );
};

export default MyOrder;