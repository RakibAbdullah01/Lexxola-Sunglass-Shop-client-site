import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';



const Purchase = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const history = useHistory();


    const [item,setItem] = useState({})
    // Get Package Details
    useEffect(()=>{
        axios.get(`https://enigmatic-shore-31912.herokuapp.com/product/${id}`)
        .then(response=>{
            setItem(response.data);
        })
    },[])
    
    // Book Order
    const {register,handleSubmit, formState: { errors },reset} = useForm();
    const onSubmit = (data) => {
        data.status = "Pending";
        axios.post(`https://enigmatic-shore-31912.herokuapp.com/orders`,data)
        .then(res=>{
            if(res.data.acknowledged){
              alert("Place Order SuccessFully!")
              history.replace('/')
              reset()
            }
        });
    };

    console.log(item);
    return (
        <div>
            <Header/>
            
                <div class="container">

                    <div class="content">
                        <h2 className="mt-4">Purchase Now</h2>

                    <div class="row align-items-center py-4">
                    
                    <div className="col-md-6">

                        <div class="image">
                            <img className="rounded" src={item.img} alt="" />
                        </div>

                        <h3 className="text-center mt-3">{item.name}</h3>

                        <div className="details fs-3">
                            <p>
                                {item.description}
                            </p>
                        </div>

                    </div>
                    
                    <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row w-75 mx-auto">

                    <div className="col-md-12">
                        <input
                            {...register("name")}
                            defaultValue={user.displayName}
                            className="p-2 m-2 w-100 rounded border border-success"
                        />
                    </div>
                    
                    <div className="col-md-12">
                        <input
                            {...register("email")}
                            defaultValue={user.email}
                            className="p-2 m-2 w-100 rounded border border-success"
                        />
                    </div>

                    <div className="col-md-12">
                        <input
                            {...register("phone")}
                            type="number"
                            placeholder="Enter your Phone Number"
                            className="p-2 m-2 w-100 rounded border border-success"
                        />
                    </div>

                    <div className="col-md-12">
                        <input
                            {...register("address")}
                            placeholder="Address"
                            className="p-2 m-2 w-100 rounded border border-success"
                        />
                    </div>

                    <div className="col-md-12">
                        <input
                            {...register("product")}
                            defaultValue={item.name}
                            className="p-2 m-2 w-100 rounded border border-success"
                        />
                    </div>

                    <div className="col-md-12">
                        <input
                            {...register("price")}
                            defaultValue={item.price}
                            className="p-2 m-2 w-100 rounded border border-success"
                        />
                    </div>
              </div>
              {errors.exampleRequired && toast.error("Error!")}

              <input type="submit" value="Purchase Now" className="btn-grad w-25 mx-auto my-2" />

            </form>
                    </div>
                    

                    
                </div>
            </div>
            </div>
            <Footer/>
            <ToastContainer />
        </div>
    );
};

export default Purchase;