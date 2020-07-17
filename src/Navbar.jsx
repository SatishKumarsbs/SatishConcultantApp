import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar=()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link  className="navbar-brand" to="/">Satish Concultant</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link  exact className="nav-link active" aria-current="page" to="/">
              Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/service">
              Service 
              </Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/about">
              About 
              </Link>
            </li>
             <li className="nav-item">
              <Link  className="nav-link" to="/contact">
              Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
        </div>
        </div>

        </>
    )
}

export default Navbar;