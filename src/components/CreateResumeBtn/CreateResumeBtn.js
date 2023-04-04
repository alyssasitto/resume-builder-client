import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../features/signupModalSlice";

const CreateResumeBtn = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isLoggedIn } = useSelector((state) => state.auth);

	const createResume = () => {
		if (!isLoggedIn) {
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
