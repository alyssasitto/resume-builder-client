import ResumeOne from "../../components/ResumeOne/ResumeOne";
import ResumeTwo from "../../components/ResumeTwo/ResumeTwo";
import ResumeThree from "../../components/ResumeThree/ResumeThree";

require("./Builder.css");

const Builder = () => {
	return (
		<div className="builder">
			<div className="resumes">
				<ResumeOne />
				<ResumeTwo />
				<ResumeThree />
			</div>
		</div>
	);
};

export default Builder;
