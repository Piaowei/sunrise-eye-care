import React from 'react';
import img1 from '../../images/doctors/dr1.png'
import img2 from '../../images/doctors/dr2.png'
import img3 from '../../images/doctors/dr3.png'
import img4 from '../../images/doctors/dr4.png'
import img5 from '../../images/doctors/dr5.png'
import img6 from '../../images/doctors/dr6.png'
const Doctors = () => {
	return (
		<div className="container p-3">
			<h4>Our Specialists</h4>
			<div class="row row-cols-1 row-cols-md-3 g-4">
				<div class="col">
					<div class="card h-100">
						<img src={img1} class="card-img-top" alt="..." />
						<div class="card-body">
							<h4 class="card-title">Dr. Jolian Acenj</h4>
							<h6>Lasik Specialist</h6>
							<p class="card-text text-center"><span className="fw-bold">Contact:</span> +07456187468</p>
							<p class="card-text text-center"><span className="fw-bold">Email:</span> Jolian@gmail.com</p>

						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<img src={img2} class="card-img-top" alt="..." />
						<div class="card-body">
							<h4 class="card-title">Dr. Natasha</h4>
							<h6>
								Surgery Specialist</h6>
							<p class="card-text text-center"><span className="fw-bold">Contact:</span> +07454676468</p>
							<p class="card-text text-center"><span className="fw-bold">Email:</span> Natasha@gmail.com</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<img src={img3} class="card-img-top" alt="..." />
						<div class="card-body">
							<h4 class="card-title">Dr. Malina Angel</h4>
							<h6>Lasik Specialist</h6>
							<p class="card-text text-center"><span className="fw-bold">Contact:</span> +07456198564</p>
							<p class="card-text text-center"><span className="fw-bold">Email:</span> angel@gmail.com</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<img src={img4} class="card-img-top" alt="..." />
						<div class="card-body">
							<h4 class="card-title">
								Dr. Triben Dina</h4>
							<h6>Contact Lens Specialist</h6>
							<p class="card-text text-center"><span className="fw-bold">Contact:</span> +9564696884684</p>
							<p class="card-text text-center"><span className="fw-bold">Email:</span> dina@gmail.com</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<img src={img5} class="card-img-top" alt="..." />
						<div class="card-body">
							<h4 class="card-title">Dr. Arnica Sarah</h4>
							<h6>	Surgery Specialist</h6>
							<p class="card-text text-center"><span className="fw-bold">Contact:</span> +941686187468</p>
							<p class="card-text text-center"><span className="fw-bold">Email:</span> sarah@gmail.com</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<img src={img6} class="card-img-top" alt="..." />
						<div class="card-body">
							<h4 class="card-title">Dr. Jolian Acenj</h4>
							<h6>Contact Lens Specialist</h6>
							<p class="card-text text-center"><span className="fw-bold">Contact:</span> +0745984666</p>
							<p class="card-text text-center"><span className="fw-bold">Email:</span> Jolian@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Doctors;