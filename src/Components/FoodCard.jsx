import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const FoodCard = ({item}) => {
  const {user} = useContext(AuthContext) 
    const {name,recipe,image,price,_id} = item || {}
    const location = useLocation()
    const navigate = useNavigate()
    const [,refetch] = useCart()
    

  const addToCart = item =>{
    if(user,user?.email){
      const orderItem = {foodId:_id,name,recipe,image,price,email:user?.email} 
      
      fetch('http://localhost:9000/carts',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(orderItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          refetch()
          toast.success('added Successfull', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        } 
      })
    }else{
      toast.warning('Please Login to order the food')
      navigate('/login', {state:{from:location}})
    }
      
  }


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
          <div className='text-center mx-auto mt-5 mb-10'><button onClick={()=>addToCart(item)} className='border-b-2 font-medium text-xl rounded-lg border-[#1F2937] px-4'>Add To Cart</button></div>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;