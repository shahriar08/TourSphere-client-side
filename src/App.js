import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; import './App.css';
import EventDetails from "./components/EventDetails/EventDetails";
import Events from "./components/Events/Events";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
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
            <Route path="/events">
              <Events></Events>
            </Route>
            <Route path="/event/:eventId">
              <EventDetails></EventDetails>
            </Route>
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
