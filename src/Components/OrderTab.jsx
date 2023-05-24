import React from 'react';
import FoodCard from './FoodCard';

const OrderTab = ({info}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {
                info.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;