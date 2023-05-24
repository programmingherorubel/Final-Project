import React from 'react';
import MenuItem from '../Share/MenuItem';
import Cover from '../Share/Cover';

const MenuCategory = ({items,title, img}) => {
    return (
        <div className='pt-8'>
            {title &&  <Cover img={img} title={title}subMenu={'Would you like to try a dish?'}></Cover>}
            <div className='grid md:grid-cols-2 gap-4 mt-16 mb-10 justify-between '>
                {
                    items.map((item,index) => <MenuItem key={index} item={item}></MenuItem>)
                }
                
            </div>
        </div>
    );
};

export default MenuCategory;