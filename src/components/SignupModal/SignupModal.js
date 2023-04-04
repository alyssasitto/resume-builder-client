import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useScrollPosition from "../../hooks/useScrollPosition";

import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../features/signupModalSlice";
import { storeItems } from "../../features/authSlice";

import axios from "axios";

import exitIcon from "../../assets/svgs/exit.svg";
import userIcon from "../../assets/svgs/user.svg";
import mailIcon from "../../assets/svgs/envelope.svg";
import lockIcon from "../../assets/svgs/lock.svg";

require("./SignupModal.css");

const SignupModal = () => {
	const API_URL = process.env.REACT_APP_API_URL;

	const scrollPosition = useScrollPosition();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState("");

	const exit = () => {
		document.body.style.height = "auto";
		document.body.style.overflow = "visible";
		dispatch(setModal(false));
	};

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
		<form
			onSubmit={signup}
			className="signup-modal form"
			style={{ top: scrollPosition }}
		>
			<button onClick={() => exit()} type="button">
				<img src={exitIcon} alt="Exit icon" />
			</button>
			<h2>Signup to start using our resume builder today!</h2>

			<div className="inputs">
				<div className="input">
					<label htmlFor="name">Name</label>

					<div>
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
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<img src={lockIcon} alt="Lock icon" />
					</div>
				</div>
			</div>

			{loading && <p>loading...</p>}
			{err && <p className="err">{err}</p>}

			<button type="submit" className="submit-btn btn">
				Signup
			</button>

			<button type="button" className="demo-btn btn">
				Demo user
			</button>

			<p className="small-txt">
				Already have an account? <Link to="/login">Login</Link>
			</p>
		</form>
	);
};

export default SignupModal;
