import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import CustomerReview from '../CustomerReview/CustomerReview';
import Offer from '../Offer/Offer';
import ProductShow from '../ProductShow/ProductShow';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header/>
            <Slider></Slider>
            <ProductShow/>
            <CustomerReview/>
            <Offer/>
            <Footer/>
        </div>
    );
};

export default Home;