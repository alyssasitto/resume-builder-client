import resumeData from "../../data/resumeData";

require("./ResumeTwo.css");

const ResumeTwo = () => {
	const resume = resumeData[1];

	console.log(resume.education);
	return (
		<div className="container">
			<div className="resume resume-two">
				<div className="top-section">
					<h1 className="uppercase">{resume.name}</h1>
					<div className="contact-info">
						{resume.contact_info.number && <p>{resume.contact_info.number}</p>}
						{resume.contact_info.email && <p>{resume.contact_info.email}</p>}
						{resume.contact_info.website && (
							<p>{resume.contact_info.website}</p>
						)}
						{resume.contact_info.linkedIn && (
							<p>{resume.contact_info.linkedIn}</p>
						)}
					</div>
				</div>
				<div className="bottom-section">
					<div className="summary section-container border-helper">
						<h2 className="uppercase">Professional summary</h2>
						<p>{resume.professional_summary}</p>
					</div>

					<div className="section-container border-helper">
						<h2 className="uppercase">Skills</h2>
						<div className="skills">
							{resume.skills.map((el) => {
								return <p>• {el}</p>;
							})}
						</div>
					</div>

					<div className="work-history section-container border-helper">
						<h2 className="uppercase">Work History</h2>
						<div>
							{resume.work_history.map((el) => {
								return (
									<div className="work">
										<p className="bold">
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

					{resume.education.length > 0 && (
						<div className="education section-container">
							<h2 className="uppercase">Education</h2>
							<div>
								{resume.education.map((el) => {
									console.log(el);
									return (
										<div className="education-container">
											<p className="bold">
												{el.degree} {el.start_date} - {el.end_date}{" "}
											</p>

											<p>{el.school}</p>
											<p>{el.field_of_study}</p>
										</div>
									);
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ResumeTwo;
