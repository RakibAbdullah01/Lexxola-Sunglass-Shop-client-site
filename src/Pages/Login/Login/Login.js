import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';
import signin from "../../../images/signin-image.jpg";
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Login.css';


const Login = () => {
    const [loginData,setLoginData]=useState({})
    const {loginUser,signInWithGoogle,user} = useAuth();

    
    const loaction = useLocation();
    const history = useHistory();

    if(user.email){
        // redirect
        history.replace('/dashboard')
    }
    const handleOnChange=e=>{
        const field = e.target.name;
        const value = e.target.value;

        const newLoginDate = {...loginData};
        newLoginDate[field] = value;
        setLoginData(newLoginDate)
    }
    const handleLoginSUbmit=e=>{
        e.preventDefault();
        loginUser(loginData.email,loginData.password,loaction,history)
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle(loaction,history)

    }
return (
        <>
            <Header/>
            <section class="sign-in mt-4">
            <div class="container">
                <div class="content row">

                    <div class="signin-image col-md-6">
                        <figure><img src={signin} alt="singin" /></figure>
                        <Link to="/registration" className="signup-image-link text-decoration-none">Create an account</Link>
                    </div>

                    <div class="col-md-6 d-flex flex-column align-items-center">
                        <div className="mx-auto">
                            <h1>Login</h1>
                        </div>
                        <form onSubmit={handleLoginSUbmit} class="register-form w-75" id="login-form">
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="email" id="email" onChange={handleOnChange} placeholder="Your Email"/>
                            </div>
                            <div class="form-group">
                                <label for="password"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" onChange={handleOnChange} placeholder="Password"/>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="btn-grad" value="Log in"/>
                            </div>
                        </form>
                        <div class="social-login">
                            <span class="social-label">Or login with</span>
                            <Button
                            onClick={handleGoogleSignIn} className="btn-grad">
                            <i class="fab fa-google pe-2"></i>
                                Google
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
           
                
        <ToastContainer />
                
                
            <Footer/>
        </>
    );
};

export default Login;