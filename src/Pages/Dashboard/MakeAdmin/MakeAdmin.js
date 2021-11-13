import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import useAuth from "../../../hooks/useAuth";
import signin from "../../../images/signin-image.jpg";

const MakeAdmin = () => {
    const {register,handleSubmit, formState: { errors },reset} = useForm();
    const {token} = useAuth();

    const onSubmit = (data) => {
        const email = data.email;
        const user = {email};

            // Update to Database
            fetch('https://enigmatic-shore-31912.herokuapp.com/users/admin',{
                method:'PUT',
                headers:{
                    'authorization': `Bearer ${token}`,
                    'content-type':'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount){
                    toast.success("Made Admin Successfully!")
                    reset();
                }
            })
        };
    return (
        <div>

    <section class="sign-in">
            <div class="container">
                <div class="content d-flex align-items-center p-4">

                    <div class="signin-image">
                        <figure><img src={signin} alt="singin" /></figure>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Make Admin</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="m-4">
                        
                                <div className="row mx-auto">

                                    <div className="col-md-12">
                                        <input
                                            {...register("email")}
                                            placeholder="Enter Email"
                                            className="p-2 m-2 w-100 rounded border border-success"
                                        />
                                    </div>

                                    <input type="submit" value="Make Admin" className="btn-grad w-50 mx-auto my-2" />
                                    
                                </div>

                        {errors.exampleRequired && toast.error("Error!")}
                    </form>
                </div>
            </div>
        </div>
    </section>
        
        <ToastContainer />

        </div>
    );
};

export default MakeAdmin;