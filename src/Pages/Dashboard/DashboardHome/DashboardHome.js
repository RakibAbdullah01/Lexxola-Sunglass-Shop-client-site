import React from 'react';
import useAuth from '../../../hooks/useAuth';
import signin from '../../../images/signin-image.jpg';


const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <section class="">
            <div class="container">
                <div class="content d-flex align-items-center p-4">

                    <div class="signin-image">
                        <figure><img src={signin} alt="singin" /></figure>
                    </div>

                    <div class="signin-form text-center m-4">
                        <h2 class="form-title">Welcome</h2>
                            <h4>{user.displayName}</h4>
                            <p>{user.email}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardHome;