import React from 'react';
import glass1 from '../../images/shop/glass1.png'
import glass2 from '../../images/shop/glass2.png'
import glass3 from '../../images/shop/glass3.png'
import glass4 from '../../images/shop/glass4.png'
import glass5 from '../../images/shop/glass5.png'
import glass6 from '../../images/shop/glass6.png'

const Contacts = () => {
	return (
		<div className="container p-3">
			<h1>Opnix Eye Care Shop Products</h1>
			<div class="row row-cols-1 row-cols-md-3 g-4">
				<div class="col ">
					<div class="card h-100 border-0">
						<img src={glass1} class="card-img-top " alt="..." />
						<div class="card-body pt-0 mt-0">
							<h4 class="card-title">Adult Eye Glass</h4>
							<p class="card-text text-center">$75 </p>

						</div>
					</div>

				</div>
				<div class="col">
					<div class="card h-100 border-0">
						<img src={glass3} class="card-img-top" alt="..." />
						<div class="card-body pt-0 mt-0">
							<h4 class="card-title">Contact Lenses</h4>

							<p class="card-text text-center"> $90</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100 border-0">
						<img src={glass2} class="card-img-top" alt="..." />
						<div class="card-body pt-0 mt-0">
							<h4 class="card-title">Gucci Eye Glass</h4>

							<p class="card-text text-center">$60</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100 border-0">
						<img src={glass4} class="card-img-top" alt="..." />
						<div class="card-body pt-0 mt-0">
							<h4 class="card-title">
								Contact Lense</h4>

							<p class="card-text text-center">$100</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100 border-0">
						<img src={glass5} class="card-img-top" alt="..." />
						<div class="card-body pt-0 mt-0">
							<h4 class="card-title">Tahoma Eye Glass</h4>

							<p class="card-text text-center">$60</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100 border-0">
						<img src={glass6} class="card-img-top" alt="..." />
						<div class="card-body pt-0 mt-0">
							<h4 class="card-title">Stereo Eye Glass</h4>
							<p class="card-text text-center">$80</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;