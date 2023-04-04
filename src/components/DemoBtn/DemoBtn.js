import { useNavigate } from "react-router-dom";
import axios from "axios";

const DemoBtn = ({ setLoading, setErr }) => {
	const API_URL = process.env.REACT_APP_API_URL;

	const navigate = useNavigate();

	const demoUser = () => {
		axios
			.get(`${API_URL}/demo_user`)
			.then((response) => {
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("timestamp", Date.now());
				setLoading(false);
				navigate("/builder");
			})
			.catch((err) => {
				console.log(err);
				setErr(err.response.data.err);
				setLoading(false);
			});
	};

	return (
		<button onClick={() => demoUser()} className="demo-btn btn">
			Demo User
		</button>
	);
};

export default DemoBtn;
