import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img,title,subMenu}) => {
    return (
        <Parallax
        blur={{ min: -60, max: 60 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div className="hero h-[500px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
                <h5 className='text-2xl'>{subMenu}</h5>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;