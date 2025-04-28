import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app"; // <-- important import

type SignupCredentials = {
  email: string;
  password: string;
};

type UserType = {
  name: string | null;
  email: string | null;
};

export const signupUserWithEmail = createAsyncThunk<
  UserType,
  SignupCredentials,
  { rejectValue: string }
>(
  "auth/signupUserWithEmail",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      if (!user.email) {
        return rejectWithValue("Email not found in user data");
      }

      return {
        name: user.displayName ?? "",  // if displayName is null -> ""
        email: user.email,
      };
    } catch (error) {
      if (error instanceof FirebaseError) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
