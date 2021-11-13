import axios from "axios";
import { default as React, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import './CustomerReview.css';


const CustomerReview = () => {

    const [cusromRevirw,setCustomReview] = useState([])

    useEffect(()=>{
        axios.get("https://enigmatic-shore-31912.herokuapp.com/reviews")
        .then(res=>{
            setCustomReview(res.data.reverse())
        })
    },[])

    console.log(cusromRevirw);
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 668,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
    <div class="container my-2">
    <div class="content">
        <h2> Customer's Review </h2>
        <Slider className="w-75 mx-auto" {...settings}>
        {
            cusromRevirw.map(rev=>(
                <div class="col">
                <div class="testimonial d-flex flex-column align-items-center justify-content-center">
                <div class="name">{rev.customer}</div>

                    <ReactStars 
                        count={5}
                        edit={false}
                        value = {rev.rating}
                        size={24}
                        activeColor="#ffd700"
                    />
                <p>{rev.review}</p>

                </div>
            
                </div>                
            ))
        }
        
          
        </Slider>
      </div>
      </div>
    );
};

export default CustomerReview;