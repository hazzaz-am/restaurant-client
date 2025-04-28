import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/types";
import { signupUserWithEmail } from "./authThunks";

export type AuthState = {
	loading: boolean;
	user: null | UserType;
};

const initialState: AuthState = {
	loading: true,
	user: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<AuthState>) => {
			state.loading = false;
			state.user = action.payload.user;
		},
		logout: (state) => {
			state.loading = false;
			state.user = null;
		},
	},
  extraReducers: (builder) => {
    builder
      // Handle the pending state for signup
      .addCase(signupUserWithEmail.pending, (state) => {
        state.loading = true;
      })
      // Handle the fulfilled state for signup
      .addCase(signupUserWithEmail.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.loading = false;
        state.user = action.payload; // Safely assign the user object to state.user
      })
      // Handle the rejected state for signup
      .addCase(signupUserWithEmail.rejected, (state, action) => {
        state.loading = false;
        console.error("Signup failed:", action.payload); // Optionally handle error here
      });
  },
	
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
