import React, { useState } from 'react';
import Cover from '../Share/Cover'
import orderimg from '../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useMenu from '../Hooks/useMenu';
import FoodCard from '../Components/FoodCard';
import OrderTab from '../Components/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const [tabIndex,setTabIndex]= useState(0)
    const {category} = useParams()
    console.log(category)
    const [menu] = useMenu()
    const dessert = menu.filter(spacificCatagory => spacificCatagory.category === "dessert")
    const pizza = menu.filter(spacificCatagory => spacificCatagory.category === "pizza")
    const salad = menu.filter(spacificCatagory => spacificCatagory.category === "salad")
    const soup = menu.filter(spacificCatagory => spacificCatagory.category === "soup")
    const offer = menu.filter(spacificCatagory => spacificCatagory.category === "offered")

    return (
        <div>
            <Helmet><title>Bistro || Order</title></Helmet>
            <Cover img={orderimg}subMenu='Would you like to try a dish?' title={'Our Shop'}></Cover>
            <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <div className='text-center mt-5 mb-5'>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                    </div>
                </TabList>
                <TabPanel>
                    <OrderTab info={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab info={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab info={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab info={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab info={offer}></OrderTab>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Order;