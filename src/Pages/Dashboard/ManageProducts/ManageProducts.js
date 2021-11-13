import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from "../../../hooks/useAuth";



const ManageProducts = () => {

    const {token} = useAuth();
    const [products,setProducts]=useState([]);

    // Load All Product
    useEffect(()=>{
      fetch(`https://enigmatic-shore-31912.herokuapp.com/products`,{
        headers: {
          'authorization': `Bearer ${token}`
        }
      })
      .then(res=> res.json())
        .then(data=>{
            setProducts(data);
        })
    },[])

    // Delete Product
    const handleDelete=(id)=>{
        const proceed = window.confirm("Are you Sure ? You want to Delete ?");
        if(proceed){
        axios.delete(`https://enigmatic-shore-31912.herokuapp.com/products/${id}`)
        .then(res=>{
            if(res.data.acknowledged){
                toast.success("Delete Product Successfully!")
            }
            const remain = products.filter(book=>book._id !== id)
            setProducts(remain)
        })}
    }
    return (
        <div>
            <h1>Manage Products</h1>
            <Table striped bordered hover variant="dark" className="text-center my-4">
            <thead>
                <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td> <i class="fas fa-trash-alt text-danger" style={{cursor:'pointer'}} onClick={()=>handleDelete(product._id)}></i></td>
                    </tr>
                    ))
                }
                
                
            </tbody>
            </Table>
        <ToastContainer />

        </div>
    );
};

export default ManageProducts;