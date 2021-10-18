import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
	// console.log(service);
	const { name, img, id } = service;
	return (
		<div>
			<div >
				<div className="col-12">
					<div className="card h-100">
						<img src={img} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">
								{name}</h5>
							<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
						</div>
						<div className="card-footer border-0  ">
							<Link to={`/booking/${id}`}><button className="btn btn-warning" >Details</button></Link>
						</div>
					</div>
				</div>


			</div>
		</div>
	);
};

export default Service;






{/* <div className="col">
						<div className="card h-100">

							<img src={service2} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Dry Eye Surgery</h5>
								<p className="card-text">This is a short card.</p>
							</div>
							<div className="card-footer border-0  ">
								<button className="btn btn-primary" >Details</button>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<img src={service3} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">
									Retina Repair</h5>
								<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
							</div>
							<div className="card-footer border-0  ">
								<button className="btn btn-primary" >Details</button>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<img src={service4} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Cornea Transplant</h5>
								<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
							</div>
							<div className="card-footer border-0  ">
								<button className="btn btn-primary" >Details</button>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<img src={service5} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Surgical Procedure
								</h5>
								<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
							</div>
							<div className="card-footer border-0  ">
								<button className="btn btn-primary" >Details</button>
							</div>

						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<img src={service6} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Laser Surgery
								</h5>
								<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
							</div>
							<div className="card-footer border-0  ">
								<button className="btn btn-primary" >Details</button>
							</div>
						</div>
					</div> */}