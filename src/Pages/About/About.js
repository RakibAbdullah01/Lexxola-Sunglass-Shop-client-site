import React from 'react';
import pic from '../../images/about-bg.png';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <>
        <Header/>
            <section class="">
                <div class="container mt-5">
                    <div class="content">
                        {/* Start */}

				<div className="row m-2 mt-4">
					<div className="col-md-5">
						<h2 className="text-start">
						<span style={{ color: "orangered" }}> Lex</span>
						xola
						</h2>
						<p className="text-start">
						In French, ‘Lunettes’ means ‘a pair of glasses’… lunettes.com.bd is an online store-front for all kinds of quality sunglasses from around the world. It provides a platform for people to spice up their life with the latest international trends at amazing prices.

At Lunettes , we don’t think you should pay a lot for the sunglasses that fit your lifestyle. This is why we carry sunglasses for every occasion and budget. Whether you’re looking for a cool pair of polarized lenses for a short motorcycle ride or a pair of mirrored aviators for your weekend out in the sun, we’ve got you covered.
						</p>
					</div>
					<div className="col-md-7">
						<section class="section-padding-120 our-services">
							<img
								alt=""
								src={pic}
								className="img-responsive wow fadeInDown custom-img animated w-100 h-55"
								data-wow-delay="5ms"
								data-wow-duration="2000ms"
								height="100px"
								style={{
									visibility: "visible",
									animationDuration: "2000ms",
									animationDelay: "-5ms",
									animationName: "fadeInDown",
								}}
							/>
						</section>
					</div>
			</div>


                        {/* End */}
                    </div>
                </div>
            </section>
        <Footer/>
        </>
    );
};

export default About;