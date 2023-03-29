import { createSlice } from "@reduxjs/toolkit";

export const signupModalSlice = createSlice({
	name: "signupModal",
	initialState: { value: false },
	reducers: {
		setModal: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setModal } = signupModalSlice.actions;
export default signupModalSlice.reducer;
