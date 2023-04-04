import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { authenticate } from "../features/authSlice";

const IsAnonymous = (props) => {
	const { isLoggedIn, isLoading } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const authState = useSelector((state) => state.auth);

	console.log(authState);

	useEffect(() => {
		dispatch(authenticate());
	}, [dispatch]);

	if (isLoading) {
		return <p>loading...</p>;
	}

	if (isLoggedIn) {
		return <Navigate to="/builder" />;
	} else {
		return props.children;
	}
};

export default IsAnonymous;
