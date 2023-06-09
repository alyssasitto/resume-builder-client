import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import DemoBtn from "../../components/DemoBtn/DemoBtn";

import mailIcon from "../../assets/svgs/envelope.svg";
import lockIcon from "../../assets/svgs/lock.svg";

const Login = () => {
	const API_URL = "http://localhost:5005";

	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState("");

	const login = (e) => {
		e.preventDefault();

		setErr("");

		setLoading(true);

		const body = {
			email,
			password,
		};

		axios
			.post(`${API_URL}/login`, body)
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
		<form onSubmit={login} className="form login-form">
			<h1>Login</h1>

			<div className="inputs">
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
				Login
			</button>
			<DemoBtn setLoading={setLoading} setErr={setErr} />

			<p className="small-txt">
				Don't have an account yet? <Link to="/signup">Signup</Link>
			</p>
		</form>
	);
};

export default Login;
