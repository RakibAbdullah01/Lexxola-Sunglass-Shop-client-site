import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';
import Register from '../../../images/signup-image.jpg';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import "./Registration.css";



const Registration = () => {
    const [loginData,setLoginData]=useState({});

    const { registerUser} = useAuth();

    const history = useHistory();

    const handlaOnBlur=e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginDate = {...loginData};
        newLoginDate[field] = value;
        setLoginData(newLoginDate)
        
    }
    const handleLoginSubmit=e=>{
        if(loginData.password !== loginData.password2){
            toast.info("Your Password did't matched!");
            e.preventDefault();
            return;
        }
        // loginData.role="user";
        registerUser(loginData.email,loginData.password,loginData.name,history);
        e.preventDefault();
    }
    return (
        <>
        <Header/>
        <section className="signup ">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Registration</h2>
                        <form onSubmit={handleLoginSubmit} className="register-form" id="register-form">
                            <div className="form-group">
                                <label for="name"><i className="fas fa-user"></i></label>
                                <input onChange={handlaOnBlur} type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="email"><i className="fas fa-envelope"></i></label>
                                <input onChange={handlaOnBlur} type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label for="pass"><i className="fas fa-lock"></i></label>
                                <input onChange={handlaOnBlur} type="password" name="password" id="pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><i className="fas fa-lock"></i></label>
                                <input onChange={handlaOnBlur} type="password" name="password2" id="re_pass" placeholder="Repeat your password"/>
                            </div>
                            
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="btn-grad" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure>
                            <img src={Register} alt="sing-up" />
                        </figure>
                        <Link to="/login" className="signup-image-link text-decoration-none">I am already member</Link>
                    </div>
                </div>
            </div>
        </section>
        {/* {
            user.email && (
                toast.success("Created User Successfull!")
            )
        }
        {
            authError && (
                toast.error(authError)
            )
        } */}
                
        <ToastContainer />

        <Footer/>
        </>
    );
};

export default Registration;