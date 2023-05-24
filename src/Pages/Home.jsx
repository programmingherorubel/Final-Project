import React from 'react';
import Banner from '../Components/Banner';
import HomeCategory from '../Components/HomeCategory';
import PopulerMenu from '../Components/PopulerMenu';
import ManuFeatcher from '../Components/ManuFeatcher';
import Testimonials from '../Components/Testimonials';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Bistro || Home </title>
            </Helmet>
            <Banner></Banner>
            <HomeCategory/>
            <PopulerMenu/>
            <ManuFeatcher />
            <Testimonials/>
        </>
    );
};

export default Home;