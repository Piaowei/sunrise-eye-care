import React from 'react';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
	return (
		<div >

			<div id="carouselExampleSlidesOnly " className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active banner-bg d-flex align-items-center">
						<div className="row ">
							<div className="col-8 col-md-12 pb-5 ">
								<h2>Lorem ipsum dolor sit amet consectetur</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolorum, optio?</p>
								<button className="btn btn-primary ">Register Now</button>
							</div>


						</div>

					</div>

				</div>
			</div>
			{/* --------------------------------------------------
			                         6 services
			------------------------------------------------------*/}
			<Services></Services>


		</div>

	);
};

export default Home;