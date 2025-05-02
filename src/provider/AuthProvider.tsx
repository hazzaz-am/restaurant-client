import { useEffect, useState } from "react"
import { AuthContext } from "../hooks/useAuth"
import { auth } from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { UserType } from "../types/types"

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<UserType | null>(null)
  const provider = new GoogleAuthProvider();

  const createAccountHandler = (email: string, password: string) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInHandler = (email: string, password: string) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignInHandler = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const signOutHandler = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser as UserType)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unSubscribe()
  }, [])

  const ctxValue = {
    loading,
    user,
    createAccountHandler,
    signInHandler,
    googleSignInHandler,
    signOutHandler
  };

  return (
    <AuthContext.Provider value={ctxValue}>
      {children}
    </AuthContext.Provider>
  )
}