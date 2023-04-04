import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import userIcon from "../../assets/svgs/user.svg";
import mailIcon from "../../assets/svgs/envelope.svg";
import lockIcon from "../../assets/svgs/lock.svg";

const Signup = () => {
	const API_URL = "http://localhost:5005";

	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState("");

	const signup = (e) => {
		e.preventDefault();

		setErr("");

		setLoading(true);

		const body = {
			name,
			email,
			password,
		};

		axios
			.post(`${API_URL}/signup`, body)
			.then((response) => {
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("timestamp", Date.now());
				setLoading(false);
				navigate("/builder");
			})
			.catch((err) => {
				console.log(err);
				setErr(err.response.data.err);
				setLoading(false);
			});
	};

	return (
		<form onSubmit={signup} className="form login-form">
			<h1>Signup</h1>

			<div className="inputs">
				<div className="input">
					<label htmlFor="name">Name</label>
					<div className="input">
						<input
							type="text"
							name="name"
							onChange={(e) => setName(e.target.value)}
						/>
						<img src={userIcon} alt="User icon" />
					</div>
				</div>

				<div className="input">
					<label htmlFor="email">Email</label>
					<div>
						<input
							type="email"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<img src={mailIcon} alt="Envelope icon" />
					</div>
				</div>

				<div className="input">
					<label htmlFor="password">Password</label>
					<div>
						<input
							type="password"
							name="passwprd"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<img src={lockIcon} alt="Lock icon" />
					</div>
				</div>
			</div>

			{loading && <p>loading...</p>}
			{err && <p className="err">{err}</p>}

			<button type="submit" className="btn submit-btn">
				Signup
			</button>
			<button type="button" className="btn demo-btn">
				Demo User
			</button>

			<p className="small-txt">
				Already have an account? <Link to="/login">Login</Link>
			</p>
		</form>
	);
};

export default Signup;
