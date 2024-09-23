import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = ()=>{
        setLoader(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoader(false);
        });
        return ()=>{
            unsubscribe;
        }
    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        signIn,
        googleSignIn,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );


};

export default AuthProvider;