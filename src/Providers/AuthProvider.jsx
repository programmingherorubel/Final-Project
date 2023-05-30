import { createUserWithEmailAndPassword, GoogleAuthProvider,getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,signInWithPopup } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import app from '../firebase/firebaseInit.js';
import axios from "axios";



export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState(null)
    const [error,setError] = useState('')
    const auth = getAuth(app);

    const googleSingIn = ()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            // send user and password server 
           
            fetch(`http://localhost:9000/users`,{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify({name:user?.displayName,email:user.email})
            })
            .then(res => res.json())
            .then(data => console.log(data))

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

    // New User For Website 
    const RegForm = (email,password,name)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                // send user and password server 
               
                fetch(`http://localhost:9000/users`,{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify({name:name,email:email})
                })
                .then(res => res.json())
                .then(data => console.log(data))

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
        setLoading(true)
        const unSubscribe =  onAuthStateChanged(auth, (user) => {
           
              setUser(user)
                if(user){
                    axios.post('http://localhost:9000/jwt',{email:user.email})
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('access_Token',data.data)
                    })
                    
              setLoading(false)
            } else{
                localStorage.removeItem('access_Token')
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
        RegForm,
        googleSingIn
    }
    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;