import React from 'react';
import { Helmet } from 'react-helmet-async';
import MenuCategory from '../Components/MenuCategory';
import useMenu from '../Hooks/useMenu';
import CommonTitle from '../Share/CommonTitle';
import Cover from '../Share/Cover';
import img from '../assets/menu/banner3.jpg';
import dessertIm from '../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../assets/menu/pizza-bg.jpg'
import saladimg from '../assets/menu/salad-bg.jpg'
import soupimg from '../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menuData] = useMenu()
    const dessert = menuData.filter(spacificCatagory => spacificCatagory.category === "dessert")
    const pizza = menuData.filter(spacificCatagory => spacificCatagory.category === "pizza")
    const salad = menuData.filter(spacificCatagory => spacificCatagory.category === "salad")
    const soup = menuData.filter(spacificCatagory => spacificCatagory.category === "soup")
    const offer = menuData.filter(spacificCatagory => spacificCatagory.category === "offered")


    return (
        <div>
            <Helmet>
                <title>Bistro || Menu</title>
            </Helmet>
            <Cover img={img} title={'OUR MENU'}subMenu={'Would you like to try a dish?'}></Cover>
            <CommonTitle shortTitle="---Don't miss---" Heading="TODAY'S OFFER"></CommonTitle>
            <MenuCategory items={offer}></MenuCategory>
            <MenuCategory items={dessert} img={dessertIm} title="dessert"></MenuCategory>
            <MenuCategory items={pizza} img={pizzaimg} title="pizza"></MenuCategory>
            <MenuCategory items={salad} img={saladimg} title="salad"></MenuCategory>
            <MenuCategory items={soup} img={soupimg} title="soup"></MenuCategory>
        </div>
    );
};

export default Menu;