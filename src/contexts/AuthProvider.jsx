import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {sendPasswordResetEmail, updateProfile,createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signOut, signInWithPopup  } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserInfo = async (updatedInfo) => {
        await updateProfile(auth.currentUser, updatedInfo);
        await auth.currentUser.reload();
        setUser({ ...auth.currentUser });
    }

    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }


    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    },[]);

    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
        loading,
        signInWithGoogle,
        updateUserInfo,
        setLoading,
        resetPassword,
        setUser
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;