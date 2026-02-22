import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  // console.log(user);

  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const updatePassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const authData = {
    createUser,
    setUser,
    user,
    loginUser,
    logout,
    loading,
    setLoading,
    updateUser,
    googleLogin,
    updatePassword,
  };

  return <AuthContext value={authData}> {children} </AuthContext>;
};

export default AuthProvider;
