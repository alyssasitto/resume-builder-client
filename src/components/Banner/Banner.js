import rectangles from "../../assets/svgs/reactangles.svg";

require("./Banner.css");

const Banner = () => {
	return (
		<article className="banner">
			<img src={rectangles} alt="Cluster of small reactangles" />
			<div>
				<h3>Intuitive Resume Builder</h3>
				<p>
					Effortlessly build your resume with our comprehensive, step-by-step
					creator.
				</p>
			</div>
		</article>
	);
};

export default Banner;
