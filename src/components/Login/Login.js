import { getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import UseFirebase from '../hooks/UseFirebase';

const Login = () => {
	// const [error, setError] = useState('');
	const { handleRegistration, handleEmailChange, handlePasswordChange, toggleLogin, handleResetPassword, signInUsingGoogle, handleNameChange, processLogin, isLogin, email, password, setError, error } = useAuth();
	const auth = getAuth();
	const location = useLocation();
	const history = useHistory();

	const redirect_uri = location.state?.from || '/home';
	const handleGoogleSignIn = () => {
		signInUsingGoogle()
			.then(result => {
				history.push(redirect_uri);
			})

	}




	const handleEmailLogIn = () => {
		processLogin(email, password)
			.then((result) => {
				history.push(redirect_uri);
				// setError("");
			})
			.catch((error) => {
				setError("Thgis is eroor king", error.message);

			});
	}

	return (
		<div className="container mt-5">
			<form onSubmit={handleRegistration}  >
				<h3 className="text-primary">Please {isLogin ? 'Login' : "Register"}</h3>

				{
					!isLogin && <div className="row mb-3">
						<label htmlFor="inputAddress" className="col-sm-2 col-form-label">Name</label>
						<div className="col-sm-10">
							<input onBlur={handleNameChange} type="text" className="form-control" id="inputAddress" placeholder="Your Name" />
						</div>
					</div>
				}

				<div className="row mb-3">
					<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
					<div className="col-sm-10">
						<input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
					</div>
				</div>

				<div className="row mb-3">
					<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
					<div className="col-sm-10">
						<input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
					</div>
				</div>

				<div className="row mb-3">
					<div className="col-sm-10 offset-sm-2">
						<div className="form-check d-flex justify-content-start">
							<input onChange={toggleLogin} className="form-check-input me-2" type="checkbox" id="gridCheck1" />
							<label className="form-check-label" htmlFor="gridCheck1">
								<span className="text-danger" > Already Registered ?</span>
							</label>
						</div>
					</div>
				</div>
				<div className="text-danger mb-3">{error}</div>

				<button type="submit" onClick={handleEmailLogIn} className="btn btn-primary me-3">{isLogin ? "Login" : "Register"}</button>


				{
					isLogin && <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">Reset Password</button>
				}

			</form>




			<br />
			<h4>Please Login</h4>
			<button onClick={handleGoogleSignIn} className="btn btn-warning rounded-circle ">Google Sign in</button>

		</div>
	);
};

export default Login;