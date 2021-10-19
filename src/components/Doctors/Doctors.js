import React from 'react';
import img1 from '../../images/doctors/dr1.png'
import img2 from '../../images/doctors/dr2.png'
import img3 from '../../images/doctors/dr3.png'
import img4 from '../../images/doctors/dr4.png'
import img5 from '../../images/doctors/dr5.png'
import img6 from '../../images/doctors/dr6.png'
import './Doctors.css';
const Doctors = () => {
	return (
		<div className="container p-3">
			<h4>Our Specialists</h4>
			<div className="row row-cols-1 row-cols-md-3 g-4 ">
				<div className="col ">
					<div className="card h-100 carts  ">
						<img src={img1} className="card-img-top" alt="..." />
						<div className="card-body">
							<h4 className="card-title">Dr. Jolian Acenj</h4>
							<h6>Lasik Specialist</h6>
							<p className="card-text text-center"><span className="fw-bold">Contact:</span> +07456187468</p>
							<p className="card-text text-center"><span className="fw-bold">Email:</span> Jolian@gmail.com</p>

						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 carts ">
						<img src={img2} className="card-img-top" alt="..." />
						<div className="card-body">
							<h4 className="card-title">Dr. Natasha</h4>
							<h6>
								Surgery Specialist</h6>
							<p className="card-text text-center"><span className="fw-bold">Contact:</span> +07454676468</p>
							<p className="card-text text-center"><span className="fw-bold">Email:</span> Natasha@gmail.com</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 carts ">
						<img src={img3} className="card-img-top" alt="..." />
						<div className="card-body">
							<h4 className="card-title">Dr. Malina Angel</h4>
							<h6>Lasik Specialist</h6>
							<p className="card-text text-center"><span className="fw-bold">Contact:</span> +07456198564</p>
							<p className="card-text text-center"><span className="fw-bold">Email:</span> angel@gmail.com</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 carts ">
						<img src={img4} className="card-img-top" alt="..." />
						<div className="card-body">
							<h4 className="card-title">
								Dr. Triben Dina</h4>
							<h6>Contact Lens Specialist</h6>
							<p className="card-text text-center"><span className="fw-bold">Contact:</span> +9564696884684</p>
							<p className="card-text text-center"><span className="fw-bold">Email:</span> dina@gmail.com</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 carts ">
						<img src={img5} className="card-img-top" alt="..." />
						<div className="card-body">
							<h4 className="card-title">Dr. Arnica Sarah</h4>
							<h6>	Surgery Specialist</h6>
							<p className="card-text text-center"><span className="fw-bold">Contact:</span> +941686187468</p>
							<p className="card-text text-center"><span className="fw-bold">Email:</span> sarah@gmail.com</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 carts ">
						<img src={img6} className="card-img-top" alt="..." />
						<div className="card-body">
							<h4 className="card-title">Dr. Jolian Acenj</h4>
							<h6>Contact Lens Specialist</h6>
							<p className="card-text text-center"><span className="fw-bold">Contact:</span> +0745984666</p>
							<p className="card-text text-center"><span className="fw-bold">Email:</span> Jolian@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Doctors;