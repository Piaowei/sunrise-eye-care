import React from 'react';
import Services from '../Services/Services';
import './Home.css';
import img1 from '../../images/banner.jpg'
import img2 from '../../images/bnnar/main2.jpg'
import img3 from '../../images/bnnar/main3.jpg'
import img4 from '../../images/bnnar/main4.jpg'

const Home = () => {
	return (

		<div className="row container-fluid pe-0 home">

			{/* <div id="carouselExampleSlidesOnly " className="carousel slide banner-bg" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active d-flex align-items-center text-bg">
							<div className="row ">
								<div className="col-6 pe-4 fw col-md-12 pb-5 ">
									<h2>Lorem ipsum dolor sit amet consectetur</h2>

									<button className="btn btn-primary ">Register Now</button>
								</div>


							</div>

						</div>

					</div>
				</div> */}
			{/* <div className="card banner-bg col-12 w-100 border-0 pb-0 mb-0" >
	<div className="card-body row-cols-2">
		<h5 className="card-title">Card title</h5>
		<p className="card-text">Some quick example text to build on the card .</p>
		<div className="row ">
			<button className="btn btn-primary col-2">Go</button>

		</div>
	</div>
</div> */}




			<div id="carouselExampleIndicators" className="carousel slide pb-5 col col-12" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={img1} className="d-block w-100 img-fluid" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={img2} className="d-block w-100 img-fluid" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={img3} className="d-block w-100 img-fluid" alt="..." />
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			{/* --------------------------------------------------
						 6 services
------------------------------------------------------*/}
			<div className="">
				<Services></Services>

			</div>


		</div>



	);
};

export default Home;