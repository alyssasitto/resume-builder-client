import CreateResumeBtn from "../CreateResumeBtn/CreateResumeBtn";

import resumesImg from "../../assets/images/resumes.png";

require("./Header.css");

const Header = () => {
	return (
		<header className="padding-helper">
			<h1>Create a professional resume for free</h1>
			<p>
				Our free resume builder offers an easy and efficient way to create a
				standout resume that highlights your skills and experience.
			</p>
			<CreateResumeBtn />

			<img src={resumesImg} alt="Illustration of 3 resumes" />
		</header>
	);
};

export default Header;
