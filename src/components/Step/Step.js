require("./Step.css");

const Step = ({ step }) => {
	return (
		<div className="step">
			<p className="step-num">{step.step}</p>
			<h3>{step.title}</h3>
			<p className="description">{step.description}</p>
		</div>
	);
};

export default Step;
