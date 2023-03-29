import CreateResumeBtn from "../CreateResumeBtn/CreateResumeBtn";

require("./CtaCard.css");

const CtaCard = () => {
	return (
		<section className="cta-card">
			<h2>Start building your resume today and get your dream job</h2>
			<CreateResumeBtn />
		</section>
	);
};

export default CtaCard;
