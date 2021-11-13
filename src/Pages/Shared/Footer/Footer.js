import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="foote text-center ">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-4">
                        <div className="w-25 mx-auto">
                            <ul className="list-unstyled footer-items ">
                                <li>
                                    <Link to="/">
                                        <i className="fab fa-facebook-f fs-5"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fab fa-instagram fs-5"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link Link="/">
                                        <i className="fab fa-twitter fs-5"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fab fa-pinterest fs-5"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="w-50 mx-auto">
                            <ul className=" text-uppercase list-unstyled d-flex footer-items">
                                <li>
                                    <Link className="text-decoration-none mati" to="contact.html">CONTACT</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none mati" to="shop.html">SHOP</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none mati" to="pricing.html">Pricing</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none mati" to="contact.html">PRIVACY POLICY</Link>
                                </li>
                            </ul>
                        </div>
                        <p className="copyright-text">Copyright &copy;2021, Designed &amp; Developed by <Link className="text-decoration-none" to="http://abdullahrakib.tk/">Rakib</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;