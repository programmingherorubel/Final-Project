import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const RequiredRoute = ({children}) => {
    const {loading,user} = useContext(AuthContext)
    const location = useLocation()
    

    if(loading){
        return <><svg class="animate-bounce w-6 h-6"></svg></>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default RequiredRoute;