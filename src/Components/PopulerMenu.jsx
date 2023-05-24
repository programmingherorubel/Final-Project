import React, { useEffect, useState } from 'react';
import MenuItem from '../Share/MenuItem';
import CommonTitle from '../Share/CommonTitle';
import useMenu from '../Hooks/useMenu';

const PopulerMenu = () => {
    const [menuData] = useMenu()
    const popular = menuData.filter(spacificCatagory => spacificCatagory.category === "popular")

    return (
        <div className=''>
            <CommonTitle shortTitle={'---Check it out---'} Heading={'FROM OUR MENU'}/>
            <div className='grid md:grid-cols-2 gap-4 mb-10 justify-between'>
                {
                    popular.map((item,index) => <MenuItem key={index} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center mt-5 mb-10'><button className='border-b-2 font-medium text-xl rounded-lg border-[#1F2937] px-4'>View Full Menu</button></div>
        </div>
    );
};

export default PopulerMenu;