import React, { useState } from 'react';
import Cover from '../Share/Cover'
import orderimg from '../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useMenu from '../Hooks/useMenu';

const Order = () => {
    const [tabIndex,setTabIndex]= useState(0)
    const [menu] = useMenu()
    const dessert = menuData.filter(spacificCatagory => spacificCatagory.category === "dessert")
    const pizza = menuData.filter(spacificCatagory => spacificCatagory.category === "pizza")
    const salad = menuData.filter(spacificCatagory => spacificCatagory.category === "salad")
    const soup = menuData.filter(spacificCatagory => spacificCatagory.category === "soup")
    const offer = menuData.filter(spacificCatagory => spacificCatagory.category === "offered")

    return (
        <div>
            <Helmet><title>Bistro || Order</title></Helmet>
            <Cover img={orderimg}subMenu='Would you like to try a dish?' title={'Our Shop'}></Cover>
            <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Order;