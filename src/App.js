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
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path="/event/:eventId">
            <EventDetails></EventDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
