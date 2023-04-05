import resumeData from "../../data/resumeData";

require("./ResumeOne.css");

const ResumeOne = () => {
	const resume = resumeData[0];

	return (
		<div className="container">
			<div className="resume resume-one">
				<div className="left-section">
					<h1 className="name uppercase">{resume.name}</h1>

					<div className="summary mb-helper">
						<h2>About Me</h2>
						<p>{resume.professional_summary}</p>
					</div>

					<div className="work-history">
						<h2>Work History</h2>
						{resume.work_history.map((el) => {
							return (
								<div>
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

				<div className="right-section">
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

					<div className="skills mb-helper">
						<h2 className="upper-case">Skills</h2>
						{resume.skills.map((el) => {
							return <p>• {el}</p>;
						})}
					</div>

					{resume.education.length > 0 && (
						<div className="education">
							<h2>Education</h2>
							{resume.education.map((el) => {
								return (
									<div>
										<p className="bold">{el.degree} </p>
										<p>
											{el.start_date} - {el.end_date}
										</p>
										<p>{el.school}</p>
										<p>{el.field_of_study}</p>
									</div>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ResumeOne;
