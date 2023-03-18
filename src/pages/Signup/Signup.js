import { useState } from "react";

const Signup = () => {
	const API_URL = "http://localhost:5005";

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
		<form>
			<h1>Signup</h1>
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
					name="passwprd"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<button onClick={() => signup()} type="submit">
				Signup
			</button>
		</form>
	);
};

export default Signup;
