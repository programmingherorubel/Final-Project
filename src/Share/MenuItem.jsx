import React from 'react';

const MenuItem = ({item}) => {
    const {name,recipe,image,price,_id} = item
    return (
        <div className='flex space-x-2 my-4'>
            <img src={image} style={{borderRadius:"0 200px 200px 200px"}} className='w-[100px]' alt="" />
                <h3 className='text-2xl uppercase'>{name}------</h3>
                <p className='text-1xl text-[#BB8506]'>{price}</p>
        </div>
    );
};

export default MenuItem;