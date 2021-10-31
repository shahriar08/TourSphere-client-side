import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; import './App.css';
import AddEvent from "./components/AddEvent/AddEvent";
import ContactUs from "./components/ContactUS/ContactUs";
import Dashboard from "./components/Dashboard/Dashboard";
import EventDetails from "./components/EventDetails/EventDetails";
import Events from "./components/Events/Events";
import FAQ from "./components/FAQ/FAQ";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import ManageEvents from "./components/ManageEvents/ManageEvents";
import MyOrder from "./components/MyOrder/MyOrder";
import NotFound from "./components/NotFound/NotFound";
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
            <Route path="/event">
              <Layout>
                <Events></Events>
              </Layout>
            </Route>
            <PrivateRoute path="/dashboard/addEvent">
              <Layout>
                <AddEvent></AddEvent>
              </Layout>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/manageEvent">
              <Layout>
                <ManageEvents></ManageEvents>
              </Layout>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <Layout>
                <MyOrder></MyOrder>
              </Layout>
            </PrivateRoute>
            <Route path="/faq">
              <FAQ></FAQ>
            </Route>
            <Route path="/contact">
              <Layout>
                <ContactUs></ContactUs>
              </Layout>
            </Route>
            <PrivateRoute path="/bookEvent/:eventId">
              <Layout>
                <EventDetails></EventDetails>
              </Layout>
            </PrivateRoute>
            <PrivateRoute path="/manageEvent">
              <Layout><Dashboard></Dashboard></Layout>
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
            <Route path="*">
              <Layout>
                <NotFound></NotFound>
              </Layout>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
