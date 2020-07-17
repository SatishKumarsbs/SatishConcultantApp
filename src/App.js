import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css'
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Foot from './Foot';
const App=()=>{
  return(
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Route exact path="/service" component={Service}></Route> 
    <Redirect to="/"></Redirect>
    </Switch>
    <Foot/>
    </>
  )
}
export default App;