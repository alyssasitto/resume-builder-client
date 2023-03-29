import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setModal } from "../../features/SignupModal";

const CreateResumeBtn = () => {
	const token = localStorage.getItem("token");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const createResume = () => {
		if (!token || token === "null") {
			document.body.style.height = "100vh";
			document.body.style.overflow = "hidden";
			dispatch(setModal(true));
		} else {
			navigate("/builder");
		}
	};

	return (
		<button onClick={() => createResume()} className="create-resume">
			Create my resume
		</button>
	);
};

export default CreateResumeBtn;
