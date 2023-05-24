import React from 'react';
import MenuItem from '../Share/MenuItem';
import Cover from '../Share/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title, img}) => {
    return (
        <div className='pt-8'>
            {title &&  <Cover img={img} title={title}subMenu={'Would you like to try a dish?'}></Cover>}
            <div className='grid md:grid-cols-2 gap-4 mt-16 mb-10 justify-between '>
                {
                    items.map((item,index) => <MenuItem key={index} item={item}></MenuItem>)
                }
            </div>
            <div className='mx-auto text-center mt-5 mb-10'>
                <Link to={`/order/${title}`}>
                    <button className='border-b-2 font-medium text-xl rounded-lg border-[#1F2937] px-4'>Order Your Food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;