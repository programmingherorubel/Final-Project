import React from 'react';

const CommonTitle = ({shortTitle,Heading}) => {
    return (
        <div className='text-center my-10'>
            <p className='text-base  text-[#D99904]'>{shortTitle}</p> <br />
            <h3 className='inline-block py-4 text-2xl border-y-2'>{Heading}</h3>
        </div>
    );
};

export default CommonTitle;