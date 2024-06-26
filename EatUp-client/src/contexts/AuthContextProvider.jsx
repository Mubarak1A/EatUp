/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentuser')))
  const [loading, setLoading] = useState(false)

  const updateUser = (email, photoURL) => {
    setUser({email, photoURL})
  }

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

  //check signed in user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        setLoading(false)
      } else {
        // User is signed out
        // ...
      }
    });
    
    return unSubscribe()
  }, [])

  const authInfo = {
    user,
    updateUser,
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
