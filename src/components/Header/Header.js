import React from 'react';
import './Header.css';
import img from './image/icon.png'

const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img src={img} alt="" width="30" height="24" class="d-inline-block align-text-top" />
						<span>Sunrise Eye Care</span>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						{/* <a className="navbar-brand" href="#">Sunrise Eye Care</a> */}
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Link</a>
							</li>

						</ul>
						<form className="d-flex justify-content-center">

							<a className="nav-link" href="#">Sign-up</a>

							<button class="btn btn-outline-success" type="submit">Login</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;