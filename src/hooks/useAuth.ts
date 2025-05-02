import { createContext, useContext } from "react";
import { UserCredential } from "firebase/auth";
import { UserType } from "../types/types";

type AuthContextType = {
  loading: boolean;
  user: null | UserType;
  createAccountHandler: (email: string, password: string) => Promise<UserCredential>;
  signInHandler: (email: string, password: string) => Promise<UserCredential>;
  googleSignInHandler: () => Promise<UserCredential>;
  signOutHandler: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
	return useContext(AuthContext);
};
