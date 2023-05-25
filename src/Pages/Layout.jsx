import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Share/Navbar'
import Footer from '../Share/Fotoer'

const Layout = () => {
    const location = useLocation()
    const withoutHeaderFooter = location.pathname.includes('/login')
    return (
        <>
        
           {withoutHeaderFooter || <Navbar />   }                                                                
            <Outlet></Outlet> 
            {withoutHeaderFooter || <Footer/>  }
        </>
    );
};

export default Layout;