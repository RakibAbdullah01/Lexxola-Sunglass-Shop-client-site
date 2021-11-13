import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders,setOrders] = useState([])
    const {user} = useAuth();

    // Load All order
    useEffect(()=>{
        const url = `https://enigmatic-shore-31912.herokuapp.com/orders/${user.email}`
        console.log(url);
        axios.get(url)
           .then(res=>{
             setOrders(res.data);
           })
 
       },[])

       // Delete order
    const handleDelete=(id)=>{
        const proceed = window.confirm("Are you Sure ? You want to Delete ?");
        if(proceed){
        axios.delete(`https://enigmatic-shore-31912.herokuapp.com/orders/${id}`)
        .then(res=>{
            if(res.data.acknowledged){
                toast.success("Delete Order Successfully!")
            }
            const remain = orders.filter(book=>book._id !== id)
            setOrders(remain)
        })}
    }

    return (
        <div>
            <h1>My Orders</h1>
            <Table striped bordered hover variant="dark" className="text-center my-4">
            <thead>
                <tr>
                <th>#</th>
                <th>Customer Name</th>
                <th>Order Item</th>
                <th>Email</th>
                <th>Order Status</th>
                <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{order.name}</td>
                        <td>{order.product}</td>
                        <td>{order.email}</td>
                        <td>{order.status}</td>
                        <td> 

                            <i class="fas fa-trash-alt text-danger px-2" style={{cursor:'pointer'}} onClick={()=>handleDelete(order._id)}></i>
                            </td>
                    </tr>
                    ))
                }
                
                
            </tbody>
            </Table>
        <ToastContainer />
        </div>
    );
};

export default MyOrders;