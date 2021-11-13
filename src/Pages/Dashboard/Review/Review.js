import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const [reviewData,setReviewData]=useState({})
    const {user} = useAuth();

    const ratingChanged = (e) => {
        const value = e.target.value;
          const newData = {...reviewData}
          newData.rating = value;
          setReviewData(newData);
      };

      const handleOnChange=e=>{
          const value = e.target.value;
          const newData = {...reviewData}
          newData.review = value;
          setReviewData(newData);
      }
      const handleReviewSubmit = (e)=>{
          e.preventDefault();
          reviewData.customer = user.displayName;
          axios.post('https://enigmatic-shore-31912.herokuapp.com/reviews',reviewData)
          .then(res=>{
              if(res.data.acknowledged){
                toast.success("Review Added Successfully!")
              }
          })
      }
    return (
        
        <div class="container">
            <div class="content ">
                <h2 class="form-title">Review</h2>
                    <form className="w-50 mx-auto" onSubmit={handleReviewSubmit}>


                        <div className="d-flex justify-content-center">
                        
                        <div class="col-md-4">
                        
                        <select onChange={ratingChanged} id="inputState" class="form-select my-2">
                            <option >5</option>
                            <option >4</option>
                            <option >3</option>
                            <option >2</option>
                            <option >1</option>
                            <option >0</option>
                        </select>

                        </div>
                            {/* <ReactStars 
                            classNames="my-4"
                                count={5}
                                // value = {4}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            /> */}
                        </div>

                        <textarea maxLength="150" class="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3" placeholder="Please say something about us"></textarea>

                        <input type="submit" name="signin" id="signin" class="btn-grad" value="Submit Review"/>
                    </form>
                    <ToastContainer />

            </div>
        </div>
    );
};

export default Review;