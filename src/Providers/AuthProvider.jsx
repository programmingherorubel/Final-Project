import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import app from '../firebase/firebaseInit.js';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState(null)
    const [error,setError] = useState('')
    const auth = getAuth(app);

    // New User For Website 
    const RegForm = (email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success('new User Create Successfull', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setUser(errorMessage)
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
        });
    }

    // Login 
    const loginForm = (email,password,name)=>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                  }).catch((error) => {
                    
                  });
                setUser(user)
                setLoading(false)
                toast.success('login Successfull', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setUser(errorMessage)
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
        });

    }

    // Web Observation 
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }else{
                setUser(null)
            } 
          });
        return ()=>{
          return  unSubscribe()
        }
    },[])


    // Logout 
    const logout = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }


    const information = {
        user,
        loading,
        error,
        logout,
        loginForm,
        RegForm
    }
    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;