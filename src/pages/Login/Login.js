import { useState } from "react";

import axios from "axios";

const Login = () => {
	const API_URL = "http://localhost:5005";

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (e) => {
		e.preventDefault();

		const body = {
			email,
			password,
		};

		axios
			.post(`${API_URL}/login`, body)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<form>
			<h1>Login</h1>
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
					name="passwprd"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<button onClick={() => login()} type="submit">
				Login
			</button>
		</form>
	);
};

export default Login;
