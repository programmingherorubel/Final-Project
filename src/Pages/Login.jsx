import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import loginimg from '../assets/others/authentication2.png'
import bg from '../assets/others/authbg.png'
import { AuthContext } from '../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const {user,error,loginForm} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const [disabled,setDisabled] = useState(true)
    const capthaRef = useRef(null)
    const navigate = useNavigate()
    const location = useLocation()
    const form = location.state?.from?.pathname

    
    
    useEffect(()=>{
        loadCaptchaEnginge(4); 
    },[])

    const handelValidateCaptcha = ()=>{
        const user_captcha_value = capthaRef.current.value
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
    }
    const onSubmit = data => {
        loginForm(data.email,data.password)
        navigate(form,{replace:true})
    };
    
    
    return (
        <div className="hero min-h-screen"style={{background:`url(${bg})`}}>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <img src={loginimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm ">
                <form onSubmit={handleSubmit(onSubmit)} className='p-4 '>
                    <div className='mt-4 mb-4 form-control'>
                        <span className="label-text py-1">Enter Your Email</span>
                        <input placeholder='Type Email' type='email' className='w-full rounded p-2' {...register("email", { required: true})} />
                    </div>
                    <div className='mt-4 mb-4 form-control'>
                        <span className="label-text py-1">Enter Your Email</span>
                        <input placeholder='Type Email'type='password' className='w-full rounded p-2' {...register("password", { required: true})} />
                    </div>
                    <div className='mt-4 mb-4 form-control'>
                        <LoadCanvasTemplate />
                        <input ref={capthaRef} placeholder='Type The Captcha avobe' className='w-full rounded p-2' />
                        <button onClick={handelValidateCaptcha} className='btn btn-success mt-1 btn-xs'>Validate</button>
                    </div>
                    {error && <small className='text-red-700'>{error}</small>}
                    <div className='text-center mt-5 mb-10'><button disabled={false} type='submit' className='text-center w-full font-medium text-xl py-2 rounded text-white px-4 bg-[#D1A054]'>Sign In</button></div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;