import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; import './App.css';
import AddEvent from "./components/AddEvent/AddEvent";
import EventDetails from "./components/EventDetails/EventDetails";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import ManageEvents from "./components/ManageEvents/ManageEvents";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addEvent">
              <AddEvent></AddEvent>
            </Route>
            <Route path="/manage">
              <ManageEvents></ManageEvents>
            </Route>
            <PrivateRoute path="/event/:eventId">
              <EventDetails></EventDetails>
            </PrivateRoute>
            <Route path="/login">
              <Layout>
                <Login></Login>
              </Layout>
            </Route>
            <Route path="/register">
              <Layout>
                <Register></Register>
              </Layout>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
