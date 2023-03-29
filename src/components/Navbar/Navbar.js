import { Link } from "react-router-dom";
import { useState } from "react";

import menuIcon from "../../assets/svgs/menu.svg";
import exitIcon from "../../assets/svgs/exit.svg";
import resumeIcon from "../../assets/svgs/resume-icon.svg";

require("./Navbar.css");

const Navbar = () => {
	const [navActive, setNavActive] = useState(false);

	if (navActive) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "visible";
	}

	const toggleNav = () => {
		setNavActive(!navActive);
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

			<ul className={navActive ? "active" : ""}>
				<li>home</li>
				<li>login</li>
				<li>signup</li>
			</ul>
		</nav>
	);
};

export default Navbar;
