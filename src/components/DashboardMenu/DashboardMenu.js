import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardMenu.css'
const DashboardMenu = () => {
    return (
        <div className="container mx-auto text-dark">
            <ul className="">

                <li>
                    <Link to="/dashboard/addEvent" className="nav-link text-dark">
                        Add Events
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/manageEvent" className="nav-link text-dark">
                        Manage Events
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DashboardMenu;