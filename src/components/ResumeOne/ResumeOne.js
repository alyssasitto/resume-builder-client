import resumeData from "../../data/resumeData";

require("./ResumeOne.css");

const ResumeOne = () => {
	const resume = resumeData[0];

	console.log(resume);
	return (
		<div className="container">
			<div className="resume resume-one">
				<div className="left-section">
					<h2 className="name uppercase">{resume.name}</h2>

					<div className="summary">
						<h2>About Me</h2>
						<p>{resume.professional_summary}</p>
					</div>

					<div className="work-history">
						<h2>Work History</h2>
						{resume.work_history.map((el) => {
							return (
								<div>
									<p>
										{el.job_title}, {el.start_date} - {el.end_date}
									</p>
									<p>
										{el.company_name}, {el.city}, {el.state}
									</p>
									<ul>
										{el.details.map((detail) => {
											return <li>• {detail}</li>;
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</div>

				<div className="right-section"></div>
			</div>
		</div>
	);
};

export default ResumeOne;
