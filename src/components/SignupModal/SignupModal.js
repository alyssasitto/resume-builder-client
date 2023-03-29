import { useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";

import { useDispatch } from "react-redux";
import { setModal } from "../../features/SignupModal";

import axios from "axios";

import exitIcon from "../../assets/svgs/exit.svg";

require("./SignupModal.css");

const SignupModal = () => {
	const API_URL = process.env.API_URL;

	const scrollPosition = useScrollPosition();

	console.log("THIS IS THE POSITION", scrollPosition);

	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const exit = () => {
		document.body.style.height = "auto";
		document.body.style.overflow = "visible";
		dispatch(setModal(false));
	};

	const signup = (e) => {
		e.preventDefault();

		const body = {
			name,
			email,
			password,
		};

		axios
			.post(`${API_URL}/signup`, body)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<form
			onSubmit={signup}
			className="signup-modal"
			style={{ top: scrollPosition }}
		>
			<button onClick={() => exit()} type="button">
				<img src={exitIcon} alt="Exit icon" />
			</button>
			<h2>Signup to start using our resume builder today!</h2>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<button type="submit">Signup</button>
		</form>
	);
};

export default SignupModal;
