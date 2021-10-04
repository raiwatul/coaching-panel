import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  mb-5 bg-primary">

                <div className="container">
                    <h1 className="text-center text-white">Sports Club</h1>
                    <br />

                    <div className="text-end">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse font-color fs-6" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                                <li className="nav-item">
                                    <NavLink className="nav-link fs-5 fw-bold" to="/home">Home</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link nav-margin fs-5 fw-bold" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link nav-margin fs-5 fw-bold" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link nav-margin fs-5 fw-bold" to="/banner">Banner</NavLink>
                                </li>




                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;