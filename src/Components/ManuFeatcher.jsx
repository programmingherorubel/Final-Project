import React from 'react';
import featcherimg from '../assets/home/featured.jpg'
import CommonTitle from '../Share/CommonTitle';

const ManuFeatcher = () => {
    
    return (
        <div  className='featchersItem text-white'>
            <div>
                <CommonTitle shortTitle={'---Check it out---'} Heading={'FROM OUR MENU'} />
                <div className="md:flex justify-center items-center mx-20">
                    <div className=''>
                        <img src={featcherimg}  alt="" />
                    </div>
                    <div className='md:ml-10'>
                        <h3 className='4xl'>

                        </h3>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <div className='text-center mt-5 mb-10'><button className='border-b-2 font-medium text-xl rounded-lg border-[#1F2937] px-4'>Read More</button></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ManuFeatcher;