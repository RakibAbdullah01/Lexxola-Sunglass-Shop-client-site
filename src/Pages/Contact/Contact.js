import React from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Contact = () => {
    const {user} = useAuth();
    return (
        <>
        <Header/>
            <div class="">
                <div class="container mt-5">
                    <div class="content">
                        <h1 className="text-center">Contact</h1>
                        
                        {/* Start */}
                        <div class="row">
                            <div class="contact-form col-md-12 w-50 mx-auto  " >
                                <form className="register-form mx-auto" id="register-form">
                                    <div className="form-group">
                                        <label for="name"><i className="fas fa-user"></i></label>
                                        <input value={user.displayName} type="text" name="name" id="name" placeholder="Your Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email"><i className="fas fa-envelope"></i></label>
                                        <input value={user.email} type="email" name="email" id="email" placeholder="Your Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="pass"><i className="fas fa-lock"></i></label>
                                        <input  type="text" name="subject" id="pass" placeholder="Subject"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="re-pass"></label>
                                        <textarea rows="6" placeholder="Message" class="form-control" name="message" id="message"></textarea>
                                    </div>
                                    
                                    <div className="form-group form-button">
                                        <input type="submit" name="signup" id="signup" className="btn-grad" value="Submit"/>
                                    </div>
                                </form>
                            </div>
			            </div>
                        {/* End */}
				    </div>
                </div>
            </div>
        <Footer/>
        </>
    );
};

export default Contact;