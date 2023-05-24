import React from 'react';

const FoodCard = ({item}) => {
    const {name,recipe,image,price,_id} = item || {}
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className='relative'>
            <img src={image} alt="Shoes" />
            <h5 className='text-2xl absolute top-0 right-0 rounded-lg p-2 m-4 bg-[#111827] text-white font-medium'>${price}</h5>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center mx-auto">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
          <div className='text-center mx-auto mt-5 mb-10'><button className='border-b-2 font-medium text-xl rounded-lg border-[#1F2937] px-4'>Add To Cart</button></div>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;