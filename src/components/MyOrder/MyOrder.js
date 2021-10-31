import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-citadel-55965.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    return (
        <div className=' container orders-table table-responsive mx-auto w-50 my-3 py-3 mb-5'>
            <h1 className='text-danger mb-5'>Your Current Tour Plan</h1>
            <table className="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
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