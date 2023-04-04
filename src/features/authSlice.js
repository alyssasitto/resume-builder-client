import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const initialState = {
	user: null,
	isLoading: true,
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		setUser: (state, action) => {
			const { user } = action.payload;
			state.user = user;
			state.isLoading = false;
			state.isLoggedIn = true;
		},
		resetState: (state) => {
			state.user = null;
			state.isLoading = false;
			state.isLoggedIn = false;
		},
	},
});

export const { setUser, resetState } = authSlice.actions;

export const authenticate = () => async (dispatch) => {
	const token = localStorage.getItem("token");
	const timestamp = localStorage.getItem("timestamp");

	const hasTokenExpired = () => {
		if (!token || !timestamp) {
			return false;
		}

		const timePassed = Date.now() - Number(timestamp);

		return timePassed > 3600000;
	};

	if (!token || hasTokenExpired()) {
		return dispatch(resetState());
	}

	axios
		.get(`${API_URL}/verify`, { headers: { token } })
		.then((response) => {
			console.log("THIS IS THE RESPONSE", response.data);
			dispatch(setUser(response.data));
		})
		.catch((err) => {
			console.log(err);
			dispatch(resetState());
		});
};

export default authSlice.reducer;
