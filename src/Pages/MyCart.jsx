import React from 'react';
import CommonTitle from '../Share/CommonTitle';
import useCart from '../Hooks/useCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const MyCart = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum,item)=> item.price + sum,0)
    const deleteProduct = (id)=>{
        const deleteData = confirm('are you sure you want to delete this Product?')
        if(deleteData){
            fetch(`http://localhost:9000/carts/${id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            toast.success('delete Success')
        })
        }
    }


    return (
        <div className='px-10 py-10  w-full'>
            <CommonTitle shortTitle='--- My Cart ---' Heading='Wanna Add More'></CommonTitle>
            <div className='flex flex-grow justify-between items-center'>
                <h3 className='text-4xl uppercase font-bold'>Total Items: {cart.length}</h3>
                <h3 className='text-4xl uppercase font-bold'>Total Price: {total}</h3>
                <h3 className='text-4xl uppercase bg-[#D1A054] p-2 rounded-xl text-white font-bold'>Pay</h3>
            </div>
            <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead className='bg-[#D1A054]'>
                    <tr>
                        <th ></th>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    cart.map((item,index)=> <tbody key={index}>
                    {/* row 1 */}
                    <tr>
                        <th>{index + 1}</th>
                        <td><img src={item.image} className='rounded-2xl' width='100px' height='100px' alt="" /></td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><FontAwesomeIcon icon={faPen}/></td>
                        <td onClick={()=>deleteProduct(item._id)}><FontAwesomeIcon icon={faTrash} /></td>
                    </tr>
                    </tbody>)
                }
            </table>
            </div>
        </div>
    );
};

export default MyCart;