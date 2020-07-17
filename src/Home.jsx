import React from 'react';
import web from "../src/images/logo1.png";
import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home=()=>{
    return(
        <>
        <Common name='Grow your business with' imgsrc={web} visit="/service" btname="Get Startde"/>
        </>
    )
}
export default Home;