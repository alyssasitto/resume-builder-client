import { Link } from "react-router-dom";
import { useState } from "react";

import { useSelector } from "react-redux";

import menuIcon from "../../assets/svgs/menu.svg";
import exitIcon from "../../assets/svgs/exit.svg";
import resumeIcon from "../../assets/svgs/resume-icon.svg";

require("./Navbar.css");

const Navbar = () => {
	const [navActive, setNavActive] = useState(false);

	const { isLoggedIn } = useSelector((state) => state.auth);

	if (navActive) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "visible";
	}

	const toggleNav = () => {
		setNavActive(!navActive);
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("timestamp");

		window.location.reload();
	};

	return (
		<nav className="main-nav padding-helper">
			<a>
				<img src={resumeIcon} alt="Resume icon" />
			</a>

			<div>
				{navActive ? (
					<button onClick={() => toggleNav()}>
						<img src={exitIcon} alt="Exit icon" />
					</button>
				) : (
					<button onClick={() => toggleNav()}>
						<img src={menuIcon} alt="Menu icon" />
					</button>
				)}
			</div>

			{!isLoggedIn ? (
				<ul className={navActive ? "active" : ""}>
					<li>
						<Link to="/" onClick={() => toggleNav()}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/login" onClick={() => toggleNav()}>
							Login
						</Link>
					</li>
					<li>
						<Link to="/signup" onClick={() => toggleNav()}>
							Signup
						</Link>
					</li>
				</ul>
			) : (
				<ul className={navActive ? "active" : ""}>
					<li>
						<Link to="/" onClick={() => toggleNav()}>
							Home
						</Link>
					</li>

					<li>
						<Link to="/builder" onClick={() => toggleNav()}>
							Create your resume
						</Link>
					</li>

					<li>
						<button onClick={() => logout()}>Logout</button>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
