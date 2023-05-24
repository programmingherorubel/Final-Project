import React, { useEffect, useState } from 'react';
import CommonTitle from '../Share/CommonTitle'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Rating from 'react-rating';

const Testimonials = () => {
    const [review,setReview] = useState([])

    useEffect(()=>{
        fetch('http://localhost:9000/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    return (
        <section className='max-w-screen-md mx-auto'>
            <CommonTitle shortTitle={'---What Our Clients Say---'} Heading={'TESTIMONIALS'}/>
            
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper my-6">
                {
                    review.map(singleReview => <SwiperSlide>
                        <div className='m-10 text-center'>
                        <Rating
                            placeholderRating={3.5}
                            emptySymbol={<i className="text-yellow-400 fa-sharp fa-regular fa-star"></i>}
                            placeholderSymbol={<i className="text-yellow-400 fa-sharp fa-solid fa-star"></i>}
                            fullSymbol={<i className="text-yellow-400 fa-sharp fa-solid fa-star"></i>}
                            />
                        <p><i className="mt-5 mb-5 text-6xl fa-sharp fa-solid fa-quote-left"></i></p>
                            <p className='text-sm mt-4'>{singleReview.details}</p>
                            <h3 className='text-2xl text-[#CD9003]'>{singleReview.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;