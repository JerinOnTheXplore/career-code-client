import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init.js';

const AuthProvider = ({children}) => {
  const [loading,setLoading]=useState(true);
  const [user,setUser]=useState(null);
  

  const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  };

  const signInUser = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  };

  const signOutUser = ()=>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setLoading(false);
      setUser(currentUser);
      console.log('User in the auth state change',currentUser);
    })
    return () =>{
      unSubscribe();
    }
  },[])


 const authInfo = {
    createUser,
    signInUser,
    signOutUser,
    user,
    loading,
 }
    return (
    <AuthContext value={authInfo}>
    {children}
    </AuthContext>
    );
};

export default AuthProvider;