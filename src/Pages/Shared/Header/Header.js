import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logOut} = useAuth()
       
       
       return(<div>
        <div className="nav-head fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light nav-bar">
                    <div className="container-fluid align-items-center">
                        <div className="d-flex flex-row align-items-center">
                        <h3>
                            <span style={{ color: "orangered" }}> Lex</span>
                            xola
						</h3>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mx-auto text-center">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        aria-current="page"
                                        to="/home"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "blue",
                                        }}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/shop"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "blue",
                                        }}
                                    >
                                        Shop
                                    </NavLink>
                                </li>

                                <li className="nav-item ">
                                    <NavLink
                                        className="nav-link "
                                        to="/about"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "blue",
                                        }}
                                    >
                                        About us
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link "
                                        to="/contact"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "blue",
                                        }}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center justify-content-center">
                                <p></p>
                                {user.email ? (
                                    <ul className="list-unstyled m-0 p-0 ">
                                        <li class="nav-item dropdown ">
                                        <div class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" >{user.displayName}</div>

                                        <ul class="dropdown-menu ">
                                            <li><Link class="dropdown-item text-center" to="/dashboard">Dashboard</Link></li>
                                            <li className="d-flex justify-content-center"><button onClick={logOut} className="text-center btn-grad text-decoration-none m-2 btn-small">
                                            Logout
                                            </button></li>
                                        </ul>
                                        </li>
                                    </ul>
                                ) : (
                                    <NavLink to="/login" className="text-decoration-none  btn-grad m-2">
                                        Login
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    );
};

export default Header;