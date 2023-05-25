import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import loginimg from '../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import bg from '../assets/others/authbg.png'
import { AuthContext } from '../Providers/AuthProvider';

const SingUp = () => {
    const {RegForm,error,user} = useContext(AuthContext)

    const { register, handleSubmit } = useForm();
    const [disabled,setDisabled] = useState(true)
    const capthaRef = useRef(null)
    const onSubmit = data => {
        RegForm(data.email,data.password,data.name)
    };

    
    return (
        <div className="hero min-h-screen"style={{background:`url(${bg})`}}>
        <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm ">
            <form onSubmit={handleSubmit(onSubmit)} className='p-4 '>
                <div className='mt-4 mb-4 form-control'>
                    <span className="label-text py-1">Enter Your Name</span>
                    <input placeholder='Type Name' type='text' className='w-full rounded p-2' {...register("name", { required: true})} />
                </div>

                <div className='mt-4 mb-4 form-control'>
                    <span className="label-text py-1">Enter Your Email</span>
                    <input placeholder='Type Email'type='email' className='w-full rounded p-2' {...register("email", { required: true})} />
                </div>

                <div className='mt-4 mb-4 form-control'>
                    <span className="label-text py-1">Enter Your Password</span>
                    <input placeholder='Type Password'type='password' className='w-full rounded p-2' {...register("password", { required: true})} />
                </div>
               
                <small>Already Register ? <Link to='/login'>Log In</Link></small>
                {error && <small className='text-red-700'>{error}</small>}
                <div className='text-center mt-5 mb-10'><button type='submit' className='text-center w-full font-medium text-xl py-2 rounded text-white px-4 bg-[#D1A054]'>Sing Up</button></div>
            </form>
            </div>
            <div className="text-center lg:text-left">
            <img src={loginimg} alt="" />
            </div>
        </div>
    </div>
    );
};

export default SingUp;