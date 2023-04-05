import resumeData from "../../data/resumeData";

require("./ResumeThree.css");

const ResumeThree = () => {
	const resume = resumeData[2];

	return (
		<div className="container">
			<div className="resume resume-three">
				<h1>
					{resume.name.split(" ")[0]} <br /> {resume.name.split(" ")[1]}{" "}
				</h1>
				<div className="contact-info mb-helper">
					{resume.contact_info.number && <p>{resume.contact_info.number}</p>}
					{resume.contact_info.email && <p>{resume.contact_info.email}</p>}
					{resume.contact_info.website && <p>{resume.contact_info.website}</p>}
					{resume.contact_info.linkedIn && (
						<p>{resume.contact_info.linkedIn}</p>
					)}
				</div>

				<div className="sections">
					<div className="about-me mb-helper section">
						<h2 className="uppercase">About Me</h2>
						<p>{resume.professional_summary}</p>
					</div>

					<div className="mb-helper section">
						<h2 className="uppercase">Skills</h2>
						<div className="skills">
							{resume.skills.map((el) => {
								return <p>• {el}</p>;
							})}
						</div>
					</div>

					<div className="work-history mb-helper section">
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
						<div className="education section">
							<h2 className="uppercase">Education</h2>
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

export default ResumeThree;
