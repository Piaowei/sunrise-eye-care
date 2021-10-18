import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
	const [user, setUser] = useState({});
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(true);
	const auth = getAuth();


	const signInUsingGoogle = () => {
		setIsLoading(true);
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider)

			// console.log("user set hoise", user);

			// .catch(error => {
			// 	seterror(error)
			// })
			.finally(() => setIsLoading(false));


	}

	useEffect(() => {
		// console.log("useEffect called");
		const unsubscribed = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user)
			}
			else {
				setUser({})
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, [])

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
			})
			.finally(() => setIsLoading(false));
	}

	const handleNameChange = e => {
		setName(e.target.value);
	}

	const toggleLogin = e => {
		setIsLogin(e.target.checked)
	}

	const handleEmailChange = e => {
		setEmail(e.target.value);
	}
	const handlePasswordChange = e => {
		setPassword(e.target.value);
	}

	// main kaj
	const handleRegistration = (e) => {
		e.preventDefault();
		console.log(email, password);
		if (password.length < 6) {
			setError('Password must be atleast 6 characters')
			return
		}

		if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
			setError('Password Must contain 2 upper case');
			return;
		}
		isLogin ? processLogin(email, password) : registerNewUser(email, password);

	}


	const processLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const user = result.user;
				setError("")
			})
			.catch((error) => {
				setError(error.message);
			});
		console.log("Ja hoise")
		return signInWithEmailAndPassword(auth, email, password);
	}

	const registerNewUser = (email, password) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				// Signed in 
				const user = result.user;
				console.log(user);
				setError('')
				verifyEmail();
				setUserName();
			})
			.catch(error => {
				setError(error.message);
			});
	}

	const setUserName = () => {
		updateProfile(auth.currentUser, { displayName: name })
			.then(result => { })
	}

	const verifyEmail = () => {
		sendEmailVerification(auth.currentUser)
			.then(result => {
				console.log(result);
			})
			.catch(error => {
				setError(error.message);
			})
	}

	const handleResetPassword = () => {
		sendPasswordResetEmail(auth, email)
			.then(result => { })
	}

	return {

		handleNameChange,
		toggleLogin,
		handleEmailChange,
		handlePasswordChange,
		handleRegistration,
		handleResetPassword,
		error,
		user,
		isLoading,
		signInUsingGoogle,
		logOut,
		processLogin,
		setError
		isLogin

	};
};

export default UseFirebase;