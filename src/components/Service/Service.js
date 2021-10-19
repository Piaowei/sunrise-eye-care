import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
	// console.log(service);
	const { name, img, id, description } = service;
	return (


		<div className="col">
			<div className="card h-100 carts2 ">
				<img src={img} className="card-img-top img-fluid " alt="..." />
				<div className="card-body">
					<h5 className="card-title">
						{name}</h5>
					<p className="card-text">{description}</p>
				</div>

				<div className="card-footer border-0  ">
					<NavLink exact to={`/booking/${id}`}><button className="btn btn-warning" > <span className="fw-bold">Details</span>  {name}</button></NavLink>
				</div>
			</div>
		</div>




	);
};

export default Service;


