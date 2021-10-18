import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import UseFirebase from '../hooks/UseFirebase';
import './Header.css';
import img from './image/icon.png'

const Header = () => {
	const { user, logOut } = useAuth();
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img src={img} alt="" width="30" height="24" className="d-inline-block align-text-top" />
						<span>Sunrise Eye Care</span>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						{/* <a className="navbar-brand" href="#">Sunrise Eye Care</a> */}
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link active fs-6 fw-bolder hover-link" aria-current="page" to="/home">Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link active fs-6 fw-bolder hover-link" aria-current="page" to="/service">Service</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link active fs-6 fw-bolder hover-link" aria-current="page" to="/doctors">Doctors</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link active fs-6 fw-bolder hover-link" aria-current="page" to="/contacts">Contacts</NavLink>
							</li>

						</ul>
						<form className="d-flex justify-content-center">

							{user?.email ?
								// <Nav.Link as={Link} to="/login">Login</Nav.Link> :

								<p className="nav-link active fs-6 fw-bolder hover-link text-danger " onClick={logOut}>Logout</p> :

								<NavLink className="nav-link active fs-6 fw-bolder hover-link" aria-current="page" to="/login">Login</NavLink>}

							<p className="nav-link active fs-9 fw-bolder hover-link">
								Signed in as: {user?.displayName}
							</p>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;