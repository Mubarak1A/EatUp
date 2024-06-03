/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  //create an account
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //signup with gmail account
  const signUpWithGmail =() => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  //login using email and password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //logout
  const logout = () => {
    return signOut(auth)
  }

  //update profile
  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoUrl
    })
  }

  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    login,
    logout,
    updateUserProfile
  }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
