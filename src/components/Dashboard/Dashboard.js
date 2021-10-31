import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import ManageEvents from '../ManageEvents/ManageEvents';

const Dashboard = () => {
    return (
        <div className="row d-flex">
            <div className="col-3">
                <DashboardMenu></DashboardMenu>
            </div>
            <div className="col-8">
                <Switch>
                    <Route path="/dashboard/addEvent">
                        <AddEvent></AddEvent>
                    </Route>
                    <Route path="/dashboard/manageEvent">
                        <ManageEvents></ManageEvents>
                    </Route>
                </Switch>

            </div>

        </div>
    );
};

export default Dashboard;