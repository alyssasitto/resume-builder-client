import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../features/authSlice";
import { Navigate } from "react-router-dom";

const IsPrivate = (props) => {
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

	if (!isLoggedIn) {
		return <Navigate to="/login" />;
	} else {
		return props.children;
	}
};

export default IsPrivate;
