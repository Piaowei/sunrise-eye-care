import React from 'react';
import glass1 from '../../images/shop/glass1.png'
import glass2 from '../../images/shop/glass2.png'
import glass3 from '../../images/shop/glass3.png'
import glass4 from '../../images/shop/glass4.png'
import glass5 from '../../images/shop/glass5.png'
import glass6 from '../../images/shop/glass6.png'

import './Contacts.css';

const Contacts = () => {
	return (
		<div className="container p-3">
			<h1>Opnix Eye Care Shop Products</h1>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<div className="col carts rounded-circle ">
					<div className="card h-75 border-0">
						<img src={glass1} className="card-img-top " alt="..." />
						<div className="card-body pt-0 mt-0">
							<h4 className="card-title">Adult Eye Glass</h4>
							<p className="card-text text-center">$75 </p>

						</div>
					</div>

				</div>
				<div className="col carts rounded-circle">
					<div className="card h-75 border-0">
						<img src={glass3} className="card-img-top" alt="..." />
						<div className="card-body pt-0 mt-0">
							<h4 className="card-title">Contact Lenses</h4>

							<p className="card-text text-center"> $90</p>
						</div>
					</div>
				</div>
				<div className="col carts rounded-circle">
					<div className="card h-75 border-0">
						<img src={glass2} className="card-img-top" alt="..." />
						<div className="card-body pt-0 mt-0">
							<h4 className="card-title">Gucci Eye Glass</h4>

							<p className="card-text text-center">$60</p>
						</div>
					</div>
				</div>
				<div className="col carts rounded-circle">
					<div className="card h-75 border-0">
						<img src={glass4} className="card-img-top" alt="..." />
						<div className="card-body pt-0 mt-0">
							<h4 className="card-title">
								Contact Lense</h4>

							<p className="card-text text-center">$100</p>
						</div>
					</div>
				</div>
				<div className="col carts rounded-circle">
					<div className="card h-75 border-0">
						<img src={glass5} className="card-img-top" alt="..." />
						<div className="card-body pt-0 mt-0">
							<h4 className="card-title">Tahoma Eye Glass</h4>

							<p className="card-text text-center">$60</p>
						</div>
					</div>
				</div>
				<div className="col carts rounded-circle">
					<div className="card h-75 border-0">
						<img src={glass6} className="card-img-top" alt="..." />
						<div className="card-body pt-0 mt-0">
							<h4 className="card-title">Stereo Eye Glass</h4>
							<p className="card-text text-center">$80</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;