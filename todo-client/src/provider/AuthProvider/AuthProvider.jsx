/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
}
    from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export const AuthContext = createContext("");
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // google sign in
    const handleGoogleSignIn = () => {
        setLoading(false)
        return signInWithPopup(auth, googleProvider)
    }
    // handle handleSignOut
    const handleSignOut = () => {
        setLoading(false)
        return signOut(auth);
    }
    const authInfo = {
        handleGoogleSignIn,
        handleSignOut,
        loading,
        user
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;