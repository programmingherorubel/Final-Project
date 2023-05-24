import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Share/Navbar'
import Footer from '../Share/Fotoer'

const Layout = () => {
    return (
        <>
            <Navbar />                                                                   
            <Outlet></Outlet> 
            <Footer/>  
        </>
    );
};

export default Layout;