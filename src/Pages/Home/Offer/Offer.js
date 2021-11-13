import React from 'react';
import pic from '../../../images/about-bg.png';

const Offer = () => {
    return (
        <div class="container my-2">
            <div class="content text-center">
            <div className="row g-5 align-items-center">
						<div className="col-md-6 col-sm-6 col-xs-12 gx-1 nopadding hidden-sm">
							<img
								src={pic}
								alt=""
								className="w-75"
								style={{
									visibility: "visible",
									animationDuration: "2000ms",
									animationDelay: "-5ms",
									animationName: "slideInLeft",
								}}
							/>
						</div>
						<div className="col-md-6 col-sm-12 col-xs-12 nopadding p-3">
							<div className="call-to-action-detail-section text-start">
								<div className="heading-2 text-center">
									<h3>Why You Choose Our Glass ?</h3>
									<h2>Glass Inspection</h2>
								</div>
								<p>
									Our SunGlass experts inspect the car on over 200 checkpoints so
									you get complete satisfaction and peace of mind before buying.{" "}
								</p>
								<div className="row">
									<div className="col-md-6">
										<ul className="list-unstyled">
											<li>
												{" "}
												<i className="fa fa-check"></i> Transmission
											</li>
											<li>
												{" "}
												<i className="fa fa-check"></i> Steering
											</li>
											<li>
												{" "}
												<i className="fa fa-check"></i> Engine
											</li>
											<li>
												{" "}
												<i className="fa fa-check"></i> Tires
											</li>
											<li>
												{" "}
												<i className="fa fa-check"></i> Lighting
											</li>
											<li>
												{" "}
												<i className="fa fa-check"></i> Interior
											</li>
										</ul>
									</div>
									<div className="col-md-6">
										<ul className="list-unstyled">
											<li>
												{" "}
												<i className="fa fa-check"></i> Suspension
											</li>
											<li>
												{" "}
												<i className="fa fa-check"></i> Exterior
											</li>
											<li>
												{" "}
												<i className="fa fa-check"></i> Brakes
											</li>
											<li>
												{" "}
												<i className="fa fa-check"></i> Air Conditioning
											</li>
											<li>
												{" "}
												<i className="fa fa-check"></i> Engine Diagnostics
											</li>
											<li>
												{" "}
												<i className="fa fa-check"></i> Wheel Alignment
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
            </div>
        </div>
    );
};

export default Offer;